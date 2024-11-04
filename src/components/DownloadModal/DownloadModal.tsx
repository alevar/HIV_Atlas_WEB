import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Spinner from '../Spinner/Spinner';

interface DownloadModalProps {
  show: boolean;
  onCancel: () => void;
}

const DownloadModal: React.FC<DownloadModalProps> = ({ show, onCancel }) => {
  return (
    <Modal show={show} onHide={onCancel} centered>
      <Modal.Header closeButton>
        <Modal.Title>Preparing Download</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Spinner />
        <p>Please wait while we prepare your download...</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Cancel Download
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DownloadModal;
