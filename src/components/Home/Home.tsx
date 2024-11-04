import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import Browser from '../Browser/Browser';
import GenomesTable from '../GenomesTable/GenomesTable';
import Spinner from '../Spinner/Spinner';
import DownloadModal from '../DownloadModal/DownloadModal';

import { DB, DBRow } from '../../types';

const Home: React.FC = () => {
  const [db, setDB] = useState<DB>({ rows: [], reference: '', map: {} });
  const [selectedAccession, setSelectedAccession] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);
  const [cancelDownload, setCancelDownload] = useState(false);

  useEffect(() => {
    const loadDB = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/alevar/HIV_Atlas/main/hiv_atlas.db.tsv'
        );
        const text = await response.text();
        const rows: DBRow[] = [];
        const map: Record<string, number> = {};

        text.split('\n').forEach((line) => {
          // skip empty lines
          if (!line) {
            return;
          }
          const [accession_id, is_reference, description, file_path] = line.split('\t');
          if (accession_id) {
            rows.push({
              accession_id,
              is_reference: is_reference === '1',
              description,
              file_path,
            });
            map[accession_id] = rows.length - 1;
          }
        });

        const referenceRow = rows.findIndex(row => row.is_reference);
        const reference = referenceRow !== -1 ? rows[referenceRow].accession_id : '';

        setDB({ rows, reference, map });
        setSelectedAccession(reference);
      } catch (error) {
        console.error('Error fetching database:', error);
      } finally {
        setLoading(false);
      }
    };

    loadDB();
  }, []);

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
        const fastaResponse = await fetch(`https://raw.githubusercontent.com/alevar/HIV_Atlas/main/data/${accession_id}/${accession_id}.fasta`);
        const gtfResponse = await fetch(`https://raw.githubusercontent.com/alevar/HIV_Atlas/main/data/${accession_id}/${accession_id}.gtf`);

        if (fastaResponse.ok) {
          const fastaText = await fastaResponse.text();
          folder.file(`${accession_id}.fasta`, fastaText);
        } else {
          console.error(`Failed to fetch ${accession_id}.fasta`);
        }

        if (gtfResponse.ok) {
          const gtfText = await gtfResponse.text();
          folder.file(`${accession_id}.gtf`, gtfText);
        } else {
          console.error(`Failed to fetch ${accession_id}.gtf`);
        }
      } catch (error) {
        console.error(`Error fetching files for ${accession_id}:`, error);
      }
    }

    if (!cancelDownload) {
      try {
        const content = await zip.generateAsync({ type: 'blob' });
        saveAs(content, 'hiv_atlas.zip');
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

  if (loading) {
    return <Spinner />;
  }

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <Browser accession_id={selectedAccession} />
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <GenomesTable
            data={db.rows}
            rowsPerPage={5}
            handleDownload={handleDownload}
            selectedAccession={selectedAccession}
            setSelectedAccession={setSelectedAccession}
          />
        </Col>
      </Row>
      <DownloadModal show={downloading} onCancel={handleModalClose} />
    </Container>
  );
};

export default Home;
