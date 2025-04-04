import React, { useState, useEffect, useMemo } from 'react';
import { Table, Row, Col, Button, InputGroup, FormControl, Pagination, Badge, Form, Dropdown } from 'react-bootstrap';
import { debounce } from 'lodash';

import { DBRow } from '../../types';
import AnnotationScoreIcon from '../AnnotationScoreIcon/AnnotationScoreIcon';

import './GenomesTable.css';

interface PaginatedTableProps {
  data: DBRow[];
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
  setSelectedAccession,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedSubtype, setSelectedSubtype] = useState<string>('');
  const [filteredData, setFilteredData] = useState<DBRow[]>([]);
  const [sortColumn, setSortColumn] = useState<keyof DBRow>('accession_id');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  // Extract unique subtypes from data
  const availableSubtypes = useMemo(() => {
    const subtypes = new Set<string>();
    data.forEach(genome => {
      if (genome.subtype) {
        subtypes.add(genome.subtype);
      }
    });
    return Array.from(subtypes).sort();
  }, [data]);

  const applyFilters = (term: string, subtype: string) => {
    let filtered = data;

    // Apply text search
    if (term) {
      filtered = filtered.filter(
        genome =>
          genome.accession_id.toLowerCase().includes(term.toLowerCase()) ||
          genome.description.toLowerCase().includes(term.toLowerCase()) ||
          (genome.name && genome.name.toLowerCase().includes(term.toLowerCase())) ||
          (genome.country && genome.country.toLowerCase().includes(term.toLowerCase())) ||
          (genome.year && genome.year.toString().includes(term))
      );
    }

    // Apply subtype filter
    if (subtype) {
      filtered = filtered.filter(genome => genome.subtype === subtype);
    }

    setFilteredData(filtered);
    setCurrentPage(1); // Reset to first page after filtering
  };

  const debouncedSearch = debounce((term: string, subtype: string) => {
    applyFilters(term, subtype);
  }, 300);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    debouncedSearch(searchTerm, selectedSubtype);
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchTerm, selectedSubtype, data]);

  useEffect(() => {
    // Sort data whenever the sort column or direction changes
    const sortedData = [...filteredData].sort((a, b) => {
      if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
      if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
    setFilteredData(sortedData);
  }, [sortColumn, sortDirection]);

  const handleSort = (column: keyof DBRow) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedSubtype('');
    setFilteredData(data);
  };

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
      <Row className="mb-3">
        <Col md={6}>
          <InputGroup>
            <FormControl
              placeholder="Search genomes by ID, name, country, or year..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Select 
              value={selectedSubtype}
              onChange={e => setSelectedSubtype(e.target.value)}
              aria-label="Select subtype"
            >
              <option value="">All Subtypes</option>
              {availableSubtypes.map(subtype => (
                <option key={subtype} value={subtype}>{subtype}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={2}>
          <Button 
            variant="outline-secondary" 
            onClick={clearFilters}
            className="w-100"
          >
            Clear Filters
          </Button>
        </Col>
      </Row>
      
      <div className="mb-2">
        <strong>Results:</strong> {filteredData.length} genomes found
        {selectedSubtype && (
          <Badge bg="info" className="ms-2">
            Subtype: {selectedSubtype} <span onClick={() => setSelectedSubtype('')} style={{cursor: 'pointer'}}>×</span>
          </Badge>
        )}
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th onClick={() => handleSort('accession_id')} style={{ cursor: 'pointer' }}>
              Accession ID {sortColumn === 'accession_id' && (sortDirection === 'asc' ? '▲' : '▼')}
            </th>
            <th onClick={() => handleSort('name')} style={{ cursor: 'pointer' }}>
              Name {sortColumn === 'name' && (sortDirection === 'asc' ? '▲' : '▼')}
            </th>
            <th onClick={() => handleSort('subtype')} style={{ cursor: 'pointer' }}>
              Subtype {sortColumn === 'subtype' && (sortDirection === 'asc' ? '▲' : '▼')}
            </th>
            <th onClick={() => handleSort('country')} style={{ cursor: 'pointer' }}>
              Country {sortColumn === 'country' && (sortDirection === 'asc' ? '▲' : '▼')}
            </th>
            <th onClick={() => handleSort('year')} style={{ cursor: 'pointer' }}>
              Year {sortColumn === 'year' && (sortDirection === 'asc' ? '▲' : '▼')}
            </th>
            <th onClick={() => handleSort('genome_annotation_score')} style={{ cursor: 'pointer' }}>
              Score {sortColumn === 'genome_annotation_score' && (sortDirection === 'asc' ? '▲' : '▼')}
            </th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map(genome => (
            <tr
              key={genome.accession_id}
              onClick={() => setSelectedAccession(genome.accession_id)}
              className={genome.accession_id === selectedAccession ? 'selected' : ''}
            >
              <td>{genome.accession_id}</td>
              <td>{genome.name || '-'}</td>
              <td>
                {genome.subtype ? (
                  <Badge bg="info">{genome.subtype}</Badge>
                ) : '-'}
              </td>
              <td>{genome.country || '-'}</td>
              <td>{genome.year || '-'}</td>
              <td>
                <AnnotationScoreIcon score={genome.genome_annotation_score*100} size={36} />
              </td>
              <td>
                <Button variant="primary" onClick={(e) => {
                  e.stopPropagation();
                  handleDownload([genome.accession_id]);
                }}>
                  Download
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {filteredData.length === 0 && (
        <div className="text-center py-4">
          <p>No genomes match your search criteria. Try adjusting your filters.</p>
        </div>
      )}

      {filteredData.length > 0 && (
        <Row>
          <Col>
            <Pagination>{renderPagination()}</Pagination>
          </Col>
          <Col className="text-end">
            <Button
              variant="success"
              className="mt-3"
              onClick={() => handleDownload(accessionIds)}
              disabled={accessionIds.length === 0}
            >
              Download All {filteredData.length > 0 && `(${filteredData.length})`}
            </Button>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default GenomesTable;