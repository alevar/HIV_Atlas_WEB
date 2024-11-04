import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const ContactUs: React.FC = () => {
    return (
        <Container className="my-5">
            <h2>Contact Us</h2>
            <p>If you encounter any issues with this web service, please file an issue on our github repository.</p>
            <p>For any queries or feedback, please email us at ales [dot] varabyou [at] jhu [dot] edu.</p>
        </Container>
    );
};

export default ContactUs;
