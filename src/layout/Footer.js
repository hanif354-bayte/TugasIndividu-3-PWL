import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

export default function Footer() {
    return (
        <Container fluid className="bg-dark text-light">
            <Row>
                <Col className="text-center py-3">
                    TEKNIK INFORMATIKA ITERA
                </Col>
            </Row>
        </Container>
    );
}