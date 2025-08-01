import React, { useState, useContext } from 'react';
import { Container, Row, Col, Nav, Form } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { DBContext } from '../../App';
import HomeHelp from '../HomeHelp/HomeHelp';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Import the logos from assets
import ccb_logo from '../../assets/ccb.logo.svg';
import hiv_atlas_logo from '../../assets/hiv_atlas.logo.crop.svg';
import './Header.css';

const Header: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { db, selectedTaxid, setSelectedTaxid, selectedAccession } = useContext(DBContext);
  const navigate = useNavigate();

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleOrganismChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newTaxid = event.target.value;
    setSelectedTaxid(newTaxid);
    
    // Navigate to the reference genome for the new organism
    const organismData = db[newTaxid];
    const newAccession = organismData.reference || organismData.rows[0]?.accession_id;
    if (newAccession) {
      navigate(`/${newTaxid}/${newAccession}`);
    }
  };

  return (
    <div className="bg-light border-bottom shadow-sm">
      <header className="header py-3">
        <Container>
          <Row className="align-items-center">
            <Col md={3}>
              <Link to="/" className="d-flex align-items-center">
                <div>
                  <img src={hiv_atlas_logo} alt="HIV Atlas Logo" style={{ height: '80px', marginRight: '15px' }} />
                </div>
                <h1 className="text-dark text-center" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '500' }}>
                  HIV Atlas
                </h1>
              </Link>
            </Col>
            <Col md={3}>
              <Form.Select 
                value={selectedTaxid} 
                onChange={handleOrganismChange}
                className="form-select-sm"
              >
                {Object.entries(db).map(([taxid, data]) => (
                  <option key={taxid} value={taxid}>
                    {data.organism}
                  </option>
                ))}
              </Form.Select>
            </Col>
            <Col md={4} className="text-end">
              <Nav className="justify-content-end align-items-center">
                <Nav.Item>
                  <i
                    className="bi bi-question-circle nav-link"
                    style={{ fontSize: '1.5rem', cursor: 'pointer', border: 'none', background: 'none' }}
                    onClick={handleShow}
                  ></i>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/tutorials" className="nav-link">Tutorials</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/about" className="nav-link">About</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/contact_us" className="nav-link">Contact</Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col md={2} className="text-end">
              <Nav.Link href="https://ccb.jhu.edu/" className="d-flex align-items-center justify-content-end">
                <img src={ccb_logo} alt="CCB Logo" style={{ height: '80px', marginLeft: '15px' }} />
              </Nav.Link>
            </Col>
          </Row>
        </Container>
      </header>
      <HomeHelp show={showModal} handleClose={handleClose} />
    </div>
  );
};

export default Header;