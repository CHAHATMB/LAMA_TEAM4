import React from "react";
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import {TiTick} from "react-icons/ti";
import {RxCross2} from  "react-icons/rx";
import {  useNavigate } from "react-router-dom";

function ApproveLoan(){
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://172.20.0.54:8080/api/admin/loan/applications');
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  function handleApprove (issue_id, loan_type, employee_id) {
    navigate("/displayLoanCard", {state:{issue_id: issue_id, loan_type: loan_type, employee_id: employee_id}});

  }
  function handleReject () {
    // useNavigate("/");
  }


    return(
        <div>
            <Header/>
            
            <h4 style={{textAlign:"center", backgroundColor:"#ffc40c", color:"white",fontStyle:"bold", fontWeight:"700",width:"100%", marginTop:"1%", padding:"0.5%"}}> New Loan Applications 
</h4>
            <Table striped bordered responsive className="table-striped-dark">
            <thead>
                <tr>
                <th>Employee ID</th>
                {/* <th>Description</th> */}
                <th>Item Category</th>
                <th>Item Make</th>
                <th>Item Description</th>
                <th>Item Valuation</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                
                {data.map((item) => (
                
                <tr key={ item.id}>
                    
                    <td>{item.employeeId}</td>
                    <td>{item.item_category}</td>
                    <td>{item.item_make}</td>
                    <td>{item.item_description}</td>
                    <td>{item.item_valuation}</td>   
                    <td>
                    <TiTick style={{color:"green"}} onClick={handleApprove(item.item_category, item.issue_id, item.employeeId)}/>
                    <RxCross2 style={{marginLeft:"10%", color:"red"}} onclick={handleReject}/>
                    </td>
                </tr>
               
                ))}
            </tbody>
            </Table>
        
        </div>
    );
}

export default ApproveLoan;