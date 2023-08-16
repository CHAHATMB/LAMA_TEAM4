/* LoginAsk.js */

import React from 'react';
import Header from './Header';
import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from 'react-bootstrap';
import './LoginAsk.css'; // Import your CSS file
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const LoginAsk = () => {

  let navigate = useNavigate();

  return (
    <div>
      <Header />
      <Container className="container-center">
        <Row className="mt-4">
          <Col md={6} className="mb-4">
            <Card style={{ width: '16rem', boxShadow: '0 8px 16px rgba(0.2, 0, 0, 0.2)' }}>
              <Card.Img variant="top" src="/admin.png" className="card-img-top" alt="Card image" />
              <Card.Body>
                <Card.Title className="text-center">Admin</Card.Title>
                <div className="button-container">
                  <Button variant="secondary" style={{ backgroundColor: '#48b4bb', color: 'white' }} onClick={() => {navigate('/adminLogin')}}>
                    Login
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card style={{ width: '16rem', boxShadow: '0 8px 16px rgba(0.2, 0, 0, 0.2)' }}>
              <Card.Img variant="top" src="/Customer.png" className="card-img-top" alt="Card image" />
              <Card.Body>
                <Card.Title className="text-center">Customer</Card.Title>
                <div className="button-container">
                  <Button variant="secondary" style={{ backgroundColor: '#48b4bb', color: 'white' }} onClick={() => {navigate('/employeeLogin')}}>
                    Login
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginAsk;
