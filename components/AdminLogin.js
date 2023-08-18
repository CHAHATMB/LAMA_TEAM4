import React, { useEffect } from 'react'
import { useState } from 'react';
import './AdminLogin.css';
import Header from './Header';
import Footer from './Footer';
import AdminDashboard from './AdminDashboard';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

function AdminLogin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dataToSend = {email: email, password: password}; 
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [role, setRole] = useState("");

  

  const fetchData = async () => {
    
  };

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
      if(data.data.role === "ADMIN"){
      console.log("Allow admin");
      navigate('/adminDashboard');
      }
      else{
        navigate('/')
      }
     
   })
    console.log("Submit")
 }
  return (
    <div>
        <Header />
    
    <div style={{display:"flex",flexWrap:"wrap"}}>
    <img src={'./admin.jpg'} style={{height:"70%", width:"58.5%"}}/>
    <div style={{ width:'22rem', padding:'2px', marginTop:'5%', marginLeft:'5%' ,overflowY:'auto', height:'24rem'}}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login to your Account</h3>
          <div className="form-group mt-3">
            <label>Employee ID</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter ID"
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
            <button type="submit" className="btn"  style={{marginTop:"7%", width:"18rem" ,backgroundColor: "#48b4bb" ,color: "white"}} onClick={handleClick}>
                Submit
            </button>
          </div>
        </div>
      </div>
      </div>
      <Footer />
      </div>

  );
};

export default AdminLogin;
