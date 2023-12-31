/* LoginAsk.js */

import React from 'react';
import Header from './Header';
import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from 'react-bootstrap';
import './LoginAsk.css'; // Import your CSS file
import Button from 'react-bootstrap/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import landing1 from "../images/l1.jpg";
import landing2 from "../images/l2.jpg";
import Footer from './Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginAsk = () => {

  let navigate = useNavigate();
  const location = useLocation();
  React.useEffect(() => {
    if(location.state?.onLoggedOut){
      // location.state?.onLoggedOut=false;
    toast.info('Logout Successfully!', {
      position:'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
 }
  },[]);

  return (
    <div>
    <ToastContainer/>
      <Container className="container-center">
          
            <Card style={{ width: '60%', boxShadow: '0 8px 16px rgba(0.2, 0, 0, 0.2)', margin:"10%", marginLeft:"5%" }}>
              <Card.Img variant="top" src={landing1} className="card-img-top" alt="Card image" />
              <Card.Body>
                <Card.Title >Admin</Card.Title>
                
                  <Button variant="secondary" style={{backgroundColor: '#48b4bb', color: 'white', width:"25%" }} onClick={() => {navigate('/adminLogin')}}>
                    Login
                  </Button>
                
              </Card.Body>
            </Card>
            <Card style={{ width: '60%', boxShadow: '0 8px 16px rgba(0.2, 0, 0, 0.2)' }}>
              <Card.Img variant="top" src={landing2} className="card-img-top" alt="Card image" />
              <Card.Body>
                <Card.Title>Employee</Card.Title>
                
                  <Button variant="secondary" style={{ backgroundColor: '#48b4bb', color: 'white', width:"25%", fontSize:"15px" }} onClick={() => {navigate('/employeeLogin')}}>
                    Login
                  </Button>
              </Card.Body>
            </Card>
      </Container>
      <Footer/>
    </div>
  );
};

export default LoginAsk;