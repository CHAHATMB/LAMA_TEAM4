import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
//import './LoanDataTable.css'; // Import the CSS file
import Header from './Header';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { RiEdit2Fill, RiDeleteBinLine} from 'react-icons/ri';
import male from '../images/male.png';
import female from '../images/female.png';

function ViewAllLoans() {
    const[data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('http://172.20.0.54:8080/api/employeecard/loans');
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

  return (
    <div>
      <Header/>
      {/* {data.map((item) => (

      ))} */}
      <div style={{display:"flex", flexWrap:"wrap"}}>
      <img src = {male} style={{marginLeft:"5%", marginTop:"1.2%"}}/>
      <div style={{marginTop:"2%"}}>
      <h4 >Name</h4>
      <h5 style={{fontStyle:"italic"}}>Designation, department</h5>
      </div>
      

      </div>

      <h4 style={{textAlign:"center", backgroundColor:"#ffc40c", color:"white",fontStyle:"bold", fontWeight:"700",width:"100%", marginTop:"1%", padding:"0.5%"}}>My loans</h4>
      <div style={{ marginTop: '20px', padding: '0 20px' }}>
        <Table striped bordered responsive className="table-striped-dark">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Loan ID</th>
              <th>Loan Type</th>
              <th>Issue Date</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              item.loan_id === null? <h4>No loan cards issued! </h4>:(
              <tr key={item.id}>
                <td>{item.loan_id}</td>
                <td>{item.employeeId}</td>
                <td>{item.loanType}</td>
                <td>{item.card_issue_date}</td>
                <td>{item.duration_in_year}</td>
              </tr>
              )
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ViewAllLoans;