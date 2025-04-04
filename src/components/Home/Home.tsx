import React, { useState, useContext, useEffect, useCallback } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { DBContext } from '../../App';
import { DBRow } from '../../types';
import Browser from '../Browser/Browser';
import GenomesTable from '../GenomesTable/GenomesTable';
import DownloadModal from '../DownloadModal/DownloadModal';
import AnnotationScoreIcon from '../AnnotationScoreIcon/AnnotationScoreIcon';

const Home: React.FC = () => {
  const { db, selectedTaxid, selectedAccession, setSelectedAccession } = useContext(DBContext);
  const [accessionData, setAccessionData] = useState<DBRow | null>(null);
  const [downloading, setDownloading] = useState(false);
  const [cancelDownload, setCancelDownload] = useState(false);
  const { taxid, accession } = useParams();
  const navigate = useNavigate();

  const currentOrganismData = db[selectedTaxid] || { rows: [] };

  useEffect(() => {
    if (selectedAccession && db[selectedTaxid]?.map) {
      const accessionIndex = db[selectedTaxid].map[selectedAccession];
      if (accessionIndex !== undefined) {
        setAccessionData(db[selectedTaxid].rows[accessionIndex]);
      }
    } else {
      setAccessionData(null);
    }
  }, [selectedAccession, selectedTaxid, db]);

  useEffect(() => {
    if (accession && accession !== selectedAccession) {
      setSelectedAccession(accession);
    }
  }, [accession, selectedAccession, setSelectedAccession]);

  const handleDownload = useCallback(async (accession_ids: string[]) => {
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
        const [fastaResponse, gtfResponse] = await Promise.all([
          fetch(`https://raw.githubusercontent.com/alevar/HIV_Atlas_Data/main/data/${accession_id}/${accession_id}.fasta`),
          fetch(`https://raw.githubusercontent.com/alevar/HIV_Atlas_Data/main/data/${accession_id}/${accession_id}.gtf`)
        ]);

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
  }, [db, selectedTaxid, cancelDownload]);

  const handleModalClose = useCallback(() => {
    setCancelDownload(true);
    setDownloading(false);
  }, []);

  const handleAccessionChange = useCallback((newAccession: string) => {
    navigate(`/${selectedTaxid}/${newAccession}`);
  }, [navigate, selectedTaxid]);

  const renderAccessionContent = () => {
    if (!selectedAccession || !accessionData) {
      return (
        <Row className="my-4">
          <Col>
            <h2>Select a genome from the table below to view details</h2>
          </Col>
        </Row>
      );
    }

    return (
      <>
        <Row className="my-4">
          <Col>
            <h1>
              {selectedAccession} 
              {accessionData.name && (
                <span className="ms-2 text-muted">"{accessionData.name}"</span>
              )}
              {accessionData.genome_annotation_score && (
                <span className="ms-2">
                  <AnnotationScoreIcon score={accessionData.genome_annotation_score * 100} size={36} />
                </span>
              )}
            </h1>
            <div className="mb-3">
              {accessionData.subtype && (
                <Badge bg="info" className="me-2">Subtype: {accessionData.subtype}</Badge>
              )}
              {accessionData.country && (
                <Badge bg="secondary" className="me-2">Country: {accessionData.country}</Badge>
              )}
              {accessionData.year && (
                <Badge bg="dark">Year: {accessionData.year}</Badge>
              )}
            </div>
            <p>{accessionData.description}</p>
          </Col>
        </Row>
        <Row className="my-4">
          <Col>
            <Browser accession_id={selectedAccession} />
          </Col>
        </Row>
      </>
    );
  };

  return (
    <Container>
      {renderAccessionContent()}
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