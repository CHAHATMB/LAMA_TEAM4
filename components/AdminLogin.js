
import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminLogin.css';
import admin from '../images/admin.jpg';
import NavLink from 'react-bootstrap/esm/NavLink';
import AdminDashboard from './AdminDashboard';
function AdminLogin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const navigate = useNavigate();

  const storeEmail = (e) =>{
    setEmail(e.target.value);
  }

  const storePassword = (e) =>{
    setPassword(e.target.value);
  }

  function handleClick(e){
    console.log("Submit")
  }
  return (
    <div style={{display:"flex",flexWrap:"wrap"}}>
    <img src={admin} style={{height:"70%", width:"58.5%"}}/>
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
            <button type="submit" className="btn"  style={{marginTop:"7%", width:"18rem"}} onClick={handleClick}>
                Submit
            </button>
          </div>
               

        </div>
      </div>
      </div>
  )
}

export default AdminLogin
