import React, { useState } from 'react';
import Header from './Header';
// import Footer from './Footer';
import { Container, Form, Button } from 'react-bootstrap';
import './LoanCardAdd.css'; // Import your CSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoanCardAdd = () => {
  const [loanType, setLoanType] = useState('');
  const [duration, setDuration] = useState(1);
  const [loanId, setLoanId] = useState('');

  let navigate = useNavigate();

  const handleLoanTypeChange = (event) => {
    setLoanType(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleLoginIdChange = (event) => {
    setLoanId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios({
      method: 'POST',
      url: 'http://172.20.0.54:8080/api/loancard/add',
      data: {
        loan_id: loanId,
        loanType: loanType,
        duration_in_year: duration
      }
     })
     navigate('/loanDataTable');
  };

  return (
    <div>
      <Header />
      <Container className="containerForm">
        <h2 className="form-title">Add Loan Card</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="loanId">
            <Form.Label className="form-label">Loan ID</Form.Label>
            <Form.Control type="text" placeholder="Enter Loan ID"  
              onChange={handleLoginIdChange}/>
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
            <Form.Label className="form-label">Loan Duration (years)</Form.Label>
            <Form.Control
              type="number"
              value={duration}
              onChange={handleDurationChange}
              min={1}
            />
          </Form.Group>
          <button className="form-button" type="submit">Add</button>
          
        </Form>
       
      </Container>
      {/* <Footer /> */}
    </div>
  );
};

export default LoanCardAdd;