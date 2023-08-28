import React, { useState } from 'react';
import Header from './Header';
// import Footer from './Footer';
import { Container, Form, Button } from 'react-bootstrap';
import './LoanCardAdd.css'; // Import your CSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      
     }
     ).then((data)=>{
      console.log(data.data);
      navigate('/loanDataTable',{state : {fromLoanCardAdd:true,fromLoanCardEdit : false}});

     }).catch((error)=>{

        const errorMessage = error.response.data.message || 'Invalid data';

        console.log(errorMessage);
        toast.error(errorMessage, {
          position:'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
     });





    };

  return (
    <div>
      <ToastContainer/>
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
            <select style={{ width:"100%"}} onChange={handleLoanTypeChange}>
                    <option style={{display:"none"}} disabled selected value> Select </option>
                    <option value="Furniture"> Furniture</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Crockery">Crockery</option>
                    <option value="Stationery">Stationery</option>
           </select>
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