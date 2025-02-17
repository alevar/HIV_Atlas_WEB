import React, { useState, useEffect } from 'react';
import { Table, Row, Col, Button, InputGroup, FormControl, Pagination } from 'react-bootstrap';

import './GenomeInfo.css';

interface GenomeInfoProps {
  accession_id?: string | null;
}

const GenomeInfo: React.FC<GenomeInfoProps> = ({ accession_id }) => {
  // Query info from NCBI for a given accession and display info (publications, summary, etc.)
  return (
    <div className="genome-info">
      <h3>Genome Information</h3>
      <p>Accession ID: {accession_id}</p>
    </div>
  );
};

export default GenomeInfo;
