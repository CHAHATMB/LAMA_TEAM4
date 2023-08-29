import React from "react";
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import {TiTick} from "react-icons/ti";
import {RxCross2} from  "react-icons/rx";
import {  useNavigate } from "react-router-dom";
import {AiOutlineArrowLeft} from 'react-icons/ai';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useLocation} from "react-router-dom";
import { Toast } from "react-bootstrap";


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
      
      console.log(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  
  const location = useLocation();

  useEffect(() => {
    if(location.state?.fromDisplayItemWiseCard){
    toast.info('Loan Approved!!', {
      position:'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
 }
  },[]);

  const handleApprove = (loan_type, issue_id, employee_id) => {
     navigate("/displayItemWiseCard", {state:{issue_id: issue_id, loan_type: loan_type, employee_id: employee_id}});

  }
  const handleReject = (loan_type, issue_id, employee_id) => {
    console.log("api call")
    axios({
      method: 'POST',
      url: 'http://172.20.0.54:8080/api/admin/loan/reject',
      data:{
        duration_in_year: 0,
        employeeId: employee_id,
        issueId: issue_id,
        loanType: loan_type,
        loan_id: 0,
      } ,
    }).then((response)=>{
      
        console.log(response);
        fetchData();

        toast.info('Loan Rejected!', {
          position:'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
    

    })
  }
  
  const handleBack = () =>{
    navigate('/adminDashboard');
  }

    return(
        <div>
           <p onClick={()=>handleBack()} style={{cursor:"pointer", marginTop:"1%", marginLeft:"1%"}}><AiOutlineArrowLeft/>Back to dashboard</p>

            
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
                    <TiTick style={{color:"green", cursor:"pointer"}} onClick={()=>handleApprove(item.item_category, item.issue_id, item.employeeId)}/>
                    <RxCross2 style={{marginLeft:"10%", color:"red", cursor:"pointer"}} onClick={()=>handleReject(item.item_category, item.issue_id, item.employeeId)}/>
                    </td>
                </tr>
               
                ))}
            </tbody>
            </Table>
            <ToastContainer/>
        
        </div>
    );
}

export default ApproveLoan;