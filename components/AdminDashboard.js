
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import card1 from '../images/cardEmp.jpg';
import card2 from '../images/card2Loan.jpg';
import card3 from '../images/card3item.jpg';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';



function AdminDashboard() {

    let navigate = useNavigate();
  return (
    <div>
    <Header/>
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

        <Button variant="outline-info" style={{backgroundColor:'white', color:'#48b4bb'}}
        onClick={() => navigate('/addUserData')}>Add Customer</Button>

        <Button variant="outline-warning" style={{backgroundColor:'white', color:'#D19900', marginLeft:"8%"}}
        onClick={() => navigate('/userDataTable')}>View Customer Table</Button>
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
        <Button variant="outline-info" style={{backgroundColor:'white', color:'#48b4bb'}}
        onClick={() => navigate('/loanCardAdd')}>Add loan Card</Button>
        <Button variant="outline-warning" style={{backgroundColor:'white', color:'#D19900', marginLeft: "12%"}}
        onClick={() => navigate('/loanDataTable')}>View Loan Table</Button>
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
        <Button variant="outline-info" style={{backgroundColor:'white', color:'#48b4bb'}}
        onClick={()=>navigate('/itemMasterAdd')}>Add item</Button>
        <Button variant="outline-warning" style={{backgroundColor:'white', color:'#D19900', marginLeft:"10%"}}
        onClick={() => navigate('/itemMasterDataTable')}>View Item Master Table</Button>
      </Card.Body>
    </Card>
    </div>
    <Footer/>
    </div>
  )
}

export default AdminDashboard
