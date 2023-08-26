import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import card1 from '../images/cardEmp.jpg';
import card2 from '../images/card2Loan.jpg';
import card3 from '../images/card3item.jpg';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import admin from '../images/male.png'
import {IoOpenOutline} from 'react-icons/io5';

function AdminDashboard() {
  const hour = new Date().getHours();

  const navigate = useNavigate();
  const handleC = () =>{
    navigate('/userDataTable');
  }

  const handleNew = () =>{
    navigate('/approveLoan');
  }

  const handleI = () =>{
    navigate('/itemMasterDataTable');
  }

  const handleL = () =>{
    navigate('/loanDataTable');
  }

  return (
    <>
   
    <div style={{display:"flex", flexWrap:"wrap"}}>
    {/* <img src ={admin} style={{marginLeft:"5%"}}/> */}
    <h2 style={{fontStyle:"bold", fontWeight:"700", marginLeft:"4%",marginTop:"1.8%", color:"#d19900"}}>  {hour <12 ? "Good Morning, " : hour < 17 ? "Good Afternoon, " : "Good Evening, "} Admin!</h2>
    <Button onClick={handleNew} variant="outline-dark" style={{marginTop:"2.5%", width:"15%", marginLeft:"50%"}}><IoOpenOutline style={{marginRight:"3%"}}/>View new applications</Button>
    </div>
    
    <div style={{display:'flex', flexWrap:'wrap'}}>
      <Card style={{ width: '27%', margin:"3%", marginTop:"4%",border: "1px solid rgba(255, 255, 255, .25)",
  borderRadius: "20px", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.25)"}}>
      <Card.Img variant="top" src={card1}/>
      <Card.Body>
        <Card.Title>Manage Customers</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}

        <Button variant="outline-info" style={{backgroundColor:'white', color:'#48b4bb'}} onClick={handleC}>View more</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '27%', margin:"3%", marginTop:"4%",border: "1px solid rgba(255, 255, 255, .25)",
  borderRadius: "20px", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.25)"}}>
      <Card.Img variant="top" src={card2}/>
      <Card.Body>
        <Card.Title>Manage Loan Cards</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button variant="outline-info" onClick={handleL} style={{backgroundColor:'white', color:'#48b4bb'}}>View more</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '27%', margin:"3%", marginTop:"4%",border: "1px solid rgba(255, 255, 255, .25)",
  borderRadius: "20px", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.25)"}}>
      <Card.Img variant="top" src={card3}/>
      <Card.Body>
        <Card.Title>Manage items</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button variant="outline-info" onClick={handleI} style={{backgroundColor:'white', color:'#48b4bb'}}>View more</Button>
      </Card.Body>
    </Card>
    <Footer/>
    </div>
    </>
  )
}

export default AdminDashboard