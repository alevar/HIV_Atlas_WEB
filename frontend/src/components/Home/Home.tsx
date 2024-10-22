import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Browser from '../../components/Browser/Browser';
import GenomesTable from '../../components/GenomesTable/GenomesTable';
import Spinner from '../../components/Spinner/Spinner';

interface Genome {
  accession_id: string;
  description: string;
}

const Home: React.FC = () => {
  const [genomes, setGenomes] = useState<Genome[]>([]);
  const [selectedAccession, setSelectedAccession] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGenomes = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/genomes');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Genome[] = await response.json();
        setGenomes(data);
      } catch (error) {
        console.error('Error fetching genomes:', error);
      } finally {
        setLoading(false); 
      }
    };
    fetchGenomes();
  }, []);

  useEffect(() => {
    const fetchReferenceAccession = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/reference_accid');
        if (!response.ok) {
          throw new Error('Failed to fetch reference accession ID');
        }
        const data = await response.json();
        setSelectedAccession(data);
      } catch (error) {
        console.error('Error fetching reference accession:', error);
      }
    };

    if (!selectedAccession) {
      fetchReferenceAccession();
    }
  }, [selectedAccession]);

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
            data={genomes}
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
