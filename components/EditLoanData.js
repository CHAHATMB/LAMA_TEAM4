import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './AddUserData.css'; // Import your CSS file
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

const EditLoanData = () => {
    const location = useLocation();
  const [loanId, setLoanId] = useState(location.state.id);
  const [loanType, setLoanType] = useState(location.state.loanType);
  const [duration, setDuration] = useState(location.state.duration);
  const [data, setData] = useState([]);

  let navigate = useNavigate();

  const handleLoanTypeChange = (event) => {
    setLoanType(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  console.log(location.state.loanType);

  const handleEdit = () => {
    // Handle form submission here

    console.log('Form submission',{
        loanType,
        loanId,
        duration,
    });

    axios({
      method: 'POST',
      url: 'http://172.20.0.54:8080/api/loancard/edit/'.concat(location.state.id).toString(),
      data:{
        loan_id: loanId,
        loanType: loanType.toString(),
        duration_in_year: duration,
      },
    }).then((data)=>{
        console.log(data);
       //add a popup
        //alert("Loan card data Updated Successfully");
       //navigate to thetable page
            
    })
    navigate('/loanDataTable');
    console.log("Submit");
  
  };

  return (
    <div>
      <Header />
      <Container className="containerForm">
        <h2 className="form-title">Loan Card Edit Form</h2>
        <Form >

          <Form.Group controlId="loginId">
            <Form.Label className="form-label">Login ID</Form.Label>
            <Form.Control 
                type="text" 
                defaultValue={location.state.id}
                disabled/>
          </Form.Group>

          <Form.Group controlId="loanType">
            <Form.Label className="form-label">Loan Type</Form.Label>
            <Form.Control as="select" 
                defaultValue={location.state.loanType} 
                onChange={handleLoanTypeChange}>
              {/* <option value="">Select Loan Type</option> */}
              <option value="Furniture">Furniture</option>
              <option value="Stationary">Stationary</option>
              <option value="Crockery">Crockery</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="duration">
            <Form.Label className="form-label">Loan Duration</Form.Label>
            <Form.Control
              type="number"
              defaultValue={location.state.duration}
              onChange={handleDurationChange}
              min={1}
            />
          </Form.Group>
          <button className="form-button" onClick={() => handleEdit()}>Add</button>
          
        </Form>
       
      </Container>
      {/* <Footer /> */}
    </div>
     
  );
};

export default EditLoanData;