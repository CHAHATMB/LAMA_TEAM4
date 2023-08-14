
import React from 'react';
import Header from './Header';
import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from 'react-bootstrap';
import './LoginAsk.css'; // Import your CSS file

const LoginAsk = () => {
  return (
    <div>
      <Header />
      <Container className="container-center">
        <Row className="mt-4">
          <Col md={6} className="mb-4">
            <Card style={{ width: '16rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <Card.Img variant="top" src="/admin.png" className="card-img-top" alt="Card image" />
              <Card.Body>
                <Card.Title>Admin</Card.Title>
                <Card.Text>
                  Some quick example text for the Admin card.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card style={{ width: '16rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <Card.Img variant="top" src="/Customer.png" className="card-img-top" alt="Card image" />
              <Card.Body>
                <Card.Title>Customer</Card.Title>
                <Card.Text>
                  Some quick example text for the Customer card.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginAsk;
