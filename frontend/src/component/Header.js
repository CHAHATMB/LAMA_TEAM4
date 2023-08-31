import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/esm/NavLink';
import logo from "../images/LamaL2.png";
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';

// background:'#FCD12A'
// function Header({isLoggedIn, onLogout}) {
function Header({ isAuthenticated, onLogout, userRoles, id}){
  const navigate = useNavigate();
 // console.log("Login status", isLoggedIn, onLogout);
  function handleHome(){
    navigate("/");
  }


  function handleAbout(){
    navigate("/about");
  }

 function handleLogout(){
  onLogout();
  navigate("/",{state:{onLoggedOut:true}});
 }

 function handleDashboard(){
  if (userRoles === "ADMIN"){
    navigate("/adminDashboard");
  }
  else if(userRoles === "USER"){
    navigate("/employeeDashboard", {state:{employeeId:id}});
  }
  else{
    navigate("/");
  }
 }

  return (
    <Navbar style={{background:'#48b4bb'}}>
    <Container className='Container'>

      <Navbar.Brand style={{display:"flex", flexWrap:"wrap"}}>
      <img src={logo} width='18%' height='5%' marginTop='1%' marginLeft='2%' style={{paddingRight:'10px', color:"white"}}/>
      <h3 onClick = {handleHome} style={{cursor:"pointer", color:'white', marginTop:'1%'}}>Loan Management</h3>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
        {isAuthenticated? (
            <h5 onClick = {() => handleDashboard()} style={{color:'white', float:'right', textDecoration:'none', fontSize:"19px", cursor:"pointer"}}>Dashboard</h5> 
          ):(
            <h5 onClick = {handleHome} style={{color:'white', float:'right', textDecoration:'none', fontSize:"19px", cursor:"pointer"}}>Home</h5> 
        )}
        
        <h5 onClick={handleAbout} style={{color:'white', float:'right', textDecoration:'none',fontSize:"19px", marginLeft:"20%", cursor:"pointer"}}>About</h5>
        </Nav>
        <Nav>
          {isAuthenticated? (
            <h5 style={{color:'white', float:'right', textDecoration:'none',fontSize:"19px", marginLeft:"100%", cursor:"pointer"}} onClick={handleLogout}>Logout</h5>
          ):(
            <h5 style={{color:'white', float:'right', textDecoration:'none',fontSize:"19px", marginLeft:"70%", cursor:"pointer"}} onClick={() => navigate('/employeeRegistration')}>Register</h5>
          )}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header