import React, { useState, useEffect } from 'react';
import { Table, Row, Col, Button, InputGroup, FormControl, Pagination } from 'react-bootstrap';
import { debounce } from 'lodash';  // You'll need to install lodash (npm install lodash)

import './GenomesTable.css';

interface Genome {
  accession_id: string;
  description: string;
}

interface PaginatedTableProps {
  data: Genome[];
  rowsPerPage: number;
  handleDownload: (accession_ids: string[]) => void;
  selectedAccession: string | null;
  setSelectedAccession: (accession_id: string) => void;
}

const GenomesTable: React.FC<PaginatedTableProps> = ({
  data,
  rowsPerPage,
  handleDownload,
  selectedAccession,
  setSelectedAccession
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredData, setFilteredData] = useState<Genome[]>([]);

  // Debounced search update
  const debouncedSearch = debounce((value: string) => {
    setFilteredData(
      data.filter(
        genome =>
          genome.accession_id.toLowerCase().includes(value.toLowerCase()) ||
          genome.description.toLowerCase().includes(value.toLowerCase())
      )
    );
    setCurrentPage(1); // Reset to first page after filtering
  }, 1000);  // 1 second debounce delay

  useEffect(() => {
    debouncedSearch(searchTerm);
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchTerm, data]);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const startRow = (currentPage - 1) * rowsPerPage;
  const paginatedData = filteredData.slice(startRow, startRow + rowsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    let items = [];
    let addedLeftEllipsis = false;
    let addedRightEllipsis = false;

    items.push(
      <Pagination.First key="first" onClick={() => handlePageChange(1)} disabled={currentPage === 1} />,
      <Pagination.Prev key="prev" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
    );

    for (let number = 1; number <= totalPages; number++) {
      if (number === currentPage || Math.abs(currentPage - number) <= 2 || number === 1 || number === totalPages) {
        items.push(
          <Pagination.Item key={number} active={number === currentPage} onClick={() => handlePageChange(number)}>
            {number}
          </Pagination.Item>
        );
      } else {
        if (number < currentPage - 2 && !addedLeftEllipsis) {
          items.push(<Pagination.Ellipsis key="left-ellipsis" />);
          addedLeftEllipsis = true;
        } else if (number > currentPage + 2 && !addedRightEllipsis) {
          items.push(<Pagination.Ellipsis key="right-ellipsis" />);
          addedRightEllipsis = true;
        }
      }
    }

    items.push(
      <Pagination.Next key="next" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />,
      <Pagination.Last key="last" onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
    );

    return items;
  };

  const accessionIds = filteredData.map(genome => genome.accession_id);

  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search genomes..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </InputGroup>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Accession ID</th>
            <th>Description</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((genome) => (
            <tr
              key={genome.accession_id}
              onClick={() => setSelectedAccession(genome.accession_id)}
              className={genome.accession_id === selectedAccession ? 'selected' : ''}
            >
              <td>{genome.accession_id}</td>
              <td>{genome.description}</td>
              <td>
                <Button variant="primary" onClick={() => handleDownload([genome.accession_id])}>
                  Download
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Row>
        <Col>
          <Pagination>{renderPagination()}</Pagination>
        </Col>
        <Col>
          <Button
            variant="success"
            className="mt-3"
            onClick={() => handleDownload(accessionIds)}
            disabled={accessionIds.length === 0}
          >
            Download All
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default GenomesTable;
