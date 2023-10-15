import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Image, Card, Container, Row, Col } from "react-bootstrap";

export default function Home() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=tesla&from=2023-09-15&sortBy=publishedAt&apiKey=2cec721a651f4b1a80436877904cba3b`
        );
        setData(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container className="mt-4" style={{ backgroundColor: "#28a745" }}>
      <Row>
        <Col>
          <h1 className="text-center text-light mb-4">Tesla News</h1>
        </Col>
      </Row>
      <Row>
        {Data.map((news, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={news.urlToImage} />
              <Card.Body>
                <Card.Title className="text-light">{news.title}</Card.Title>
                <Card.Text>{news.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
