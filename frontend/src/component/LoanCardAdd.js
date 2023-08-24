import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container, Form, Button } from 'react-bootstrap';
import './LoanCardAdd.css'; // Import your CSS file

const LoanCardAdd = () => {
  const [loanType, setLoanType] = useState('');
  const [duration, setDuration] = useState(1);

  const handleLoanTypeChange = (event) => {
    setLoanType(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
  };

  return (
    <div>
      <Header />
      <Container className="containerForm">
        <h2 className="form-title">Loan Application Form</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="loginId">
            <Form.Label className="form-label">Employee ID</Form.Label>
            <Form.Control type="text" placeholder="Enter employee ID" />
          </Form.Group>
          <Form.Group controlId="loanType">
            <Form.Label className="form-label">Loan Type</Form.Label>
            <Form.Control as="select" value={loanType} onChange={handleLoanTypeChange}>
              {/* <option value="">Select Loan Type</option> */}
              <option value="Furniture">Furniture</option>
              <option value="Stationary">Stationary</option>
              <option value="Crockery">Crockery</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="duration">
            <Form.Label className="form-label">Loan Duration (months)</Form.Label>
            <Form.Control
              type="number"
              value={duration}
              onChange={handleDurationChange}
              min={1}
            />
          </Form.Group>
          <div className="form-button">
            <Button  onClick={handleSubmit}>
              Add Data
            </Button>
          </div>
        </Form>
      </Container>
      <Footer />
    </div>
  );
};

export default LoanCardAdd;