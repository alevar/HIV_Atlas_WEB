import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Browser from '../../components/Browser/Browser';
import GenomesTable from '../../components/GenomesTable/GenomesTable';
import Spinner from '../../components/Spinner/Spinner';

import { DB, DBRow } from '../../types';

const Home: React.FC = () => {
  const [db, setDB] = useState<DB>({ rows: [], reference: '', map: {} });
  const [selectedAccession, setSelectedAccession] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

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

  const handleDownload = (accession_ids: string[]) => {
    fetch('http://localhost:5000/api/download/genome_', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ accessions: accession_ids }),
    })
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `hiv_atlas.zip`;
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch(error => console.error('Download failed:', error));
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
    </Container>
  );
};

export default Home;
