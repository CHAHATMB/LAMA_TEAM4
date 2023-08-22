import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './AddUserData.css'; // Import your CSS file
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const LoanCardEdit = () => {
    const location = useLocation();
  const [loanId, setLoanId] = useState(location.state.id);
  const [loanType, setLoanType] = useState(location.state.type);
  const [duration, setDuration] = useState(location.state.duration);
  const [data, setData] = useState([]);
  let navigate = useNavigate();

  const handleEdit = () => {
    // Handle form submission here
    console.log('Form submitted:', {
     loanId,
     loanType,
     duration
    });

    axios({
      method: 'POST',
      url: 'http://172.20.0.54:8080/api/loancard/edit/'.concat(location.state.id).toString(),
      data:{
        loan_id:loanId,
        loanType: loanType,
        duration:duration,
       
      } ,
    }).then((data)=>{
        console.log(data);
        
       //add a popup
       // alert("Employee Updated Successfully");
        //   //clear the form
        //   setEmployeeId('');
        //   setDesignation('');
        //   setEmployeeName('');
        //   setDob('');
        //   setDepartment('');
        //   setDoj('');
        //   setGender('');
        //   setEmail('');
      //navigate to thetable page
          
    })
    console.log("Submit")
    navigate('/loanDataTable');
  };

  return (
    <div>
      <Header />
      <div className="containerForm">
        <h2 className="form-title">Edit loan card</h2>
        <form>
          <label className="form-label">Loan ID:</label>
          <input
            type="text"
            value=  {location.state.id}
            onChange={(e) => setLoanId(e.target.value)}
            disabled
          />

          <label className="form-label">Loan Type:</label>
          <select
            defaultValue={location.state.type}
            onChange={(e) => setLoanType(e.target.value)}
            required
          >
            {/* <option value="">Select Designation</option> */}
            <option value="Furniture">Furniture</option>
            <option value="Crockery">Crockery</option>
            <option value="Stationery">Stationery</option>
            <option value="Electronics">Electronics</option>
            {/* Add more designations as needed */}
          </select>

          <label className="form-label">Duration:</label>
          <input
            type="text"
            defaultValue={location.state.duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />

          <button className="form-button" type="submit" onClick={handleEdit}>Submit</button>
        </form>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default LoanCardEdit;