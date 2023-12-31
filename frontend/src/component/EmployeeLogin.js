import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminLogin.css';
import employee from '../images/employee.jpg';
import NavLink from 'react-bootstrap/esm/NavLink';
import Header from './Header';
import Footer from './Footer';
import { Button } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useLocation} from "react-router-dom";



function EmployeeLogin({ onLogin}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const storeEmail = (e) =>{
    setEmail(e.target.value);
  }

  const storePassword = (e) =>{
    setPassword(e.target.value);
  }

  function handleClick(e){
    axios({
     method: 'POST',
     url: 'http://172.20.0.54:8080/api/auth/login',
     data:{
       email: email,
       password: password
     } ,
    }).then((data)=>{
      console.log(data);
      axios.defaults.headers.common.Authorization = "Bearer " + data.data.id_token;
      if(data.data.role === "USER"){
        const token = data.data.id_token;
        const role = data.data.role;
        const id = data.data.employeeId;
        onLogin(token, role, id);
      console.log(data.data.employeeId);
      navigate('/employeeDashboard', {state: {employeeId:data.data.employeeId,onLoggedIn:true}});
      }
      else {
        // Display a toast message for non-admin users
        toast.error("You are not authorized as an user.");
       
        navigate('/');
      }
    }).catch((error) => {
      // Handle error cases here
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
  
    console.log("Submit");
  }
  
  return (
    <>
    <div style={{display:"flex",flexWrap:"wrap"}}>
    <img src={employee} style={{height:"75%", width:"60%"}}/>
    <div style={{ width:'22rem', padding:'2px', marginTop:'5%', marginLeft:'5%' ,overflowY:'auto', height:'24rem'}}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login to your Account</h3>
          <div className="form-group mt-3">
            <label>Employee Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter Email"
              onChange={storeEmail}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={storePassword}
            />

          </div>
        
          <div className="d-grid gap-2 mt-3">
            <Button variant="primary" onClick={handleClick} style={{marginTop:"7%", width:"18rem", backgroundColor:"#48b4bb"}}>
                Submit
            </Button>
          </div>
               

          {/* <p className="CreateNew"><NavLink>Forgot password?</NavLink>
          </p> */}

        </div>
      </div>
      </div>
      <ToastContainer/>
      <Footer/>
      </>
  )
}

export default EmployeeLogin