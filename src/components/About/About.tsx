import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About: React.FC = () => {
    return (
        <Container className="my-5">
            <Row>
                <Col lg={8} className="mx-auto">
                    <h1 className="text-center mb-4">About HIV Atlas</h1>
                    
                    <Card className="mb-4">
                        <Card.Body>
                            <h3>Project Overview</h3>
                            <p>
                                The HIV Atlas is a comprehensive genomic resource that provides detailed information about HIV genomes, 
                                their annotations, and comparative analysis tools. This platform serves researchers, clinicians, and 
                                bioinformaticians working in HIV research and related fields.
                            </p>
                        </Card.Body>
                    </Card>

                    <Card className="mb-4">
                        <Card.Body>
                            <h3>Key Features</h3>
                            <ul>
                                <li>Interactive genome browser with detailed annotations</li>
                                <li>Download reference-grade genome annotations for thousands of HIV and SIV genomes</li>
                            </ul>
                        </Card.Body>
                    </Card>

                    <Card className="mb-4">
                        <Card.Body>
                            <h3>Institution</h3>
                            <p>
                                <strong>Organization:</strong> Johns Hopkins University - Center for Computational Biology (CCB)
                            </p>
                            <p>
                                <strong>Website:</strong> <a href="https://ccb.jhu.edu/HIV_Atlas/" target="_blank" rel="noopener noreferrer">https://ccb.jhu.edu/HIV_Atlas/</a>
                            </p>
                        </Card.Body>
                    </Card>

                    <Card className="mb-4">
                        <Card.Body>
                            <h3>Contact Information</h3>
                            <p>
                                For questions, suggestions, or collaboration opportunities, please visit our 
                                <a href="/contact_us"> Contact Us</a> page or reach out to the development team.
                            </p>
                            <p>
                                <strong>Center for Computational Biology (CCB)</strong><br />
                                Johns Hopkins University<br />
                                Baltimore, MD 21218
                            </p>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <h3>Citation</h3>
                            <p>
                                If you use the HIV Atlas in your research, please cite:
                            </p>
                            <blockquote className="blockquote">
                                <p className="mb-0">
                                    Citation Coming Soon
                                </p>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
