import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from '../images/applyl2.jpg';
import img2 from '../images/viewL.jpg';
import img3 from '../images/viewItemsP.jpg';
import Container from 'react-bootstrap/esm/Container';
import Footer from './Footer';

function EmployeeDashboard() {
    const hour = new Date().getHours();
  return (

    <div style={{display:"flex", flexWrap:"wrap", backgroundColor:"whitesmoke", paddingBottom:"11%"}}>
      <div style={{width:"30%", marginLeft:"1%", marginTop:"9%"}}>
        <h1 style={{fontStyle:"bold", fontWeight:"700", marginLeft:"7%", color:"#d19900"}}>  {hour <12 ? "Good Morning, " : hour < 17 ? "Good Afternoon, " : "Good Evening, "}</h1>
        <h1  style={{fontStyle:"bold", fontWeight:"700", marginLeft:"7%", color:"#d19900"}}>User</h1>
        <h1 style={{fontStyle:"bold", fontWeight:"700", marginLeft:"7%", color:"#48b4bb"}}>Welcome to your</h1>
        <h1 style={{fontStyle:"bold", fontWeight:"700", marginLeft:"7%", color:"#48b4bb"}}>Dashboard</h1>
      </div>
      <Card style={{ width: '19%', margin:"2%", marginTop:"6%",border: "1px solid rgba(255, 255, 255, .25)",
borderRadius: "20px", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.25)"}}>
        <Card.Img variant="top" src={img1}/>
        <Card.Body>
        <Card.Title>Apply for loan</Card.Title>
        {/* <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
        </Card.Text> */}
        <Button variant="outline-warning" style={{backgroundColor:'white', color:'#d19900'}}>Apply now</Button>
        
        </Card.Body>
    </Card>

    <Card style={{ width: '19%', margin:"2%", marginTop:"6%",border: "1px solid rgba(255, 255, 255, .25)",
borderRadius: "20px", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.25)"}}>
        <Card.Img variant="top" src={img2}/>
        <Card.Body>
        <Card.Title>View my loans</Card.Title>
        {/* <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
        </Card.Text> */}
        <Button variant="outline-warning" style={{backgroundColor:'white', color:'#d19900'}}>View details</Button>
        
        </Card.Body>
    </Card>
    <Card style={{ width: '19%', margin:"2%", marginTop:"6%",border: "1px solid rgba(255, 255, 255, .25)",
borderRadius: "20px", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.25)"}}>
        <Card.Img variant="top" src={img3}/>
        <Card.Body>
        <Card.Title>View items purchased</Card.Title>
        {/* <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
        </Card.Text> */}
        <Button variant="outline-warning" style={{backgroundColor:'white', color:'#d19900'}}>View details</Button>
        
        </Card.Body>
    </Card>
    <Footer/>
    </div>
  
  
    
  )
}

export default EmployeeDashboard
