import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

// background:'#FCD12A'
function Header() {
  return (
    <Navbar style={{background:'#48b4bb'}}>
    <Container className='Container'>

      <Navbar.Brand >
      {/* <img src={LogoCH} width='8%' height='5%' marginTop='1%' marginLeft='2%' style={{paddingRight:'10px'}}/> */}
      <h3 style={{color:'white', marginTop:'1%'}}>Loan Management</h3>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {/* <Nav className="ms-auto">
          <Nav.Link ><NavLink to='/About' exact style={{color:'white', float:'right', textDecoration:'none'}}>About</NavLink></Nav.Link>
          <Nav.Link ><NavLink to='/ContactUs' exact style={{color:'white', textDecoration:'none'}}>Contact us</NavLink></Nav.Link>

        </Nav> */}
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
