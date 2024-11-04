import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface HomeHelpProps {
  show: boolean;
  handleClose: () => void;
}

const HomeHelp: React.FC<HomeHelpProps> = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>How to use this page</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Here is some information about how to navigate and use this page.</p>
        <ul>
          <li>Use the search bar to filter genomes by accession ID or description.</li>
          <li>Click on a row in the table to view genome details.</li>
          <li>You can download individual genomes or all filtered genomes at once using the download buttons.</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default HomeHelp;
