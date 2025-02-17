import React, { useState, useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { DBContext } from '../../App';
import Browser from '../Browser/Browser';
import GenomesTable from '../GenomesTable/GenomesTable';
import Spinner from '../Spinner/Spinner';
import DownloadModal from '../DownloadModal/DownloadModal';

const Home: React.FC = () => {
  const { db, selectedTaxid, selectedAccession, setSelectedAccession } = useContext(DBContext);
  const [downloading, setDownloading] = useState(false);
  const [cancelDownload, setCancelDownload] = useState(false);
  const { taxid, accession } = useParams();
  const navigate = useNavigate();

  // Update selected accession when URL params change
  useEffect(() => {
    if (accession && accession !== selectedAccession) {
      setSelectedAccession(accession);
    }
  }, [accession, setSelectedAccession]);

  // Get the rows for the selected organism
  const currentOrganismData = db[selectedTaxid] || { rows: [] };

  const handleDownload = async (accession_ids: string[]) => {
    setDownloading(true);
    setCancelDownload(false);

    const zip = new JSZip();

    for (const accession_id of accession_ids) {
      if (cancelDownload) {
        setDownloading(false);
        return;
      }

      const folder = zip.folder(accession_id);
      if (!folder) continue;

      try {
        const fastaResponse = await fetch(
          `https://raw.githubusercontent.com/alevar/HIV_Atlas_Data/main/data/${accession_id}/${accession_id}.fasta`
        );
        const gtfResponse = await fetch(
          `https://raw.githubusercontent.com/alevar/HIV_Atlas_Data/main/data/${accession_id}/${accession_id}.gtf`
        );

        if (fastaResponse.ok) {
          const fastaText = await fastaResponse.text();
          folder.file(`${accession_id}.fasta`, fastaText);
        }

        if (gtfResponse.ok) {
          const gtfText = await gtfResponse.text();
          folder.file(`${accession_id}.gtf`, gtfText);
        }
      } catch (error) {
        console.error(`Error fetching files for ${accession_id}:`, error);
      }
    }

    if (!cancelDownload) {
      try {
        const content = await zip.generateAsync({ type: 'blob' });
        const organismName = db[selectedTaxid]?.organism.toLowerCase() || 'genome';
        saveAs(content, `${organismName}_atlas.zip`);
      } catch (error) {
        console.error('Error generating zip file:', error);
      }
    }

    setDownloading(false);
  };

  const handleModalClose = () => {
    setCancelDownload(true);
    setDownloading(false);
  };

  const handleAccessionChange = (newAccession: string) => {
    navigate(`/${selectedTaxid}/${newAccession}`);
  };

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>{selectedAccession}</h1>
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <Browser accession_id={selectedAccession} />
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <GenomesTable
            data={currentOrganismData.rows}
            rowsPerPage={5}
            handleDownload={handleDownload}
            selectedAccession={selectedAccession}
            setSelectedAccession={handleAccessionChange}
          />
        </Col>
      </Row>
      <DownloadModal show={downloading} onCancel={handleModalClose} />
    </Container>
  );
};

export default Home;