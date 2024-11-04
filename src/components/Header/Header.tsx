import React, { useState } from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HomeHelp from '../HomeHelp/HomeHelp';

// Import the logos from assets
import ccb_logo from '../../assets/ccb.logo.svg';
import hiv_atlas_logo from '../../assets/hiv_atlas.logo.crop.svg';

import './Header.css';

const Header: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <div className="bg-light border-bottom shadow-sm">
            <header className="header py-3">
                <Container>
                    <Row className="align-items-center">
                        {/* HIV Atlas Logo */}
                        <Col md={3}>
                            <Nav.Link href="/" className="d-flex align-items-center">
                                <div>
                                    <img src={hiv_atlas_logo} alt="HIV Atlas Logo" style={{ height: '80px', marginRight: '15px' }} />
                                </div>
                                <h1 className="text-dark text-center" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '500' }}>HIV Atlas</h1>
                            </Nav.Link>
                        </Col>

                        <Col md={7} className="text-end">
                            <Nav className="justify-content-end">
                                <i
                                    className="bi bi-question-circle"
                                    style={{ fontSize: '1.5rem', cursor: 'pointer', color: '#007bff' }}
                                    onClick={handleShow}
                                ></i>
                                <Nav.Item>
                                    <Nav.Link href="/about" className="nav-link">About</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/contact_us" className="nav-link">Contact</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>

                        <Col md={1} className="text-end">
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
