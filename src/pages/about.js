import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function About() {
  return (
    <Container className="mt-4" style={{ background: 'linear-gradient(to right, #28a745, #218838)', padding: '20px', borderRadius: '10px', color: '#fff' }}>
      <h2 className="text-center mb-4">Tentang Kami</h2>
      <Row>
        <Col md={6} className="mb-4">
          <Card style={{ background: '#218838', color: '#fff' }}>
            <Card.Img variant="top" src="https://placekitten.com/600/400" alt="Team" />
            <Card.Body>
              <Card.Title>Tim Kami</Card.Title>
              <Card.Text>
                Kami adalah tim yang berkomitmen untuk menyajikan informasi terbaru seputar berita, terutama yang berkaitan dengan perusahaan Tesla.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card style={{ background: '#218838', color: '#fff' }}>
            <Card.Body>
              <Card.Title>Misi Kami</Card.Title>
              <Card.Text>
                Misi kami adalah menyediakan berita terkini dengan akurat dan informatif. Kami percaya bahwa akses cepat dan mudah ke informasi adalah kunci untuk tetap terhubung dengan perkembangan terbaru.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <p className="text-center mt-4">
        Jangan ragu untuk menjelajahi halaman kami dan tetap terhubung dengan perkembangan terbaru. Terima kasih telah mengunjungi situs kami!
      </p>
    </Container>
  );
}
