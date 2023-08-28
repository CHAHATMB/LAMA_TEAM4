import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'; // Import the icons
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import { RiEdit2Fill, RiDeleteBinLine} from 'react-icons/ri';
import {HiUserAdd} from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useLocation} from "react-router-dom";


function UserDataTable() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [id,setId] = useState("");
  const [employeeData, setemployeeData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://172.20.0.54:8080/api/employee/all');
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const location = useLocation();

  useEffect(() => {
    if(location.state?.fromAddUserData){
    toast.info('Loan Card Added Successfully!', {
      position:'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
 }
  },[]);

  useEffect(() => {
    if(location.state?.fromEditUserData){
    toast.info('Loan Card Edited Successfully!', {
      position:'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
 }
  },[]);



  function handleAdd()
  {
    navigate("/addUserData");
  }


  const deleteData = async () => {
    try {
      
      const response = await axios.post('http://172.20.0.54:8080/api/employee/delete/'.concat(id).toString()).then(
        ()=>{
          fetchData();
          setShow(false);
        }
      )
      console.log(response.data);
      
      console.log("delete");
      
     
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const showAlert = (id) =>{
    setId(id);
    setShow(true);

  }


  return (
    <div style={{marginBottom:"3%", height:"95%"}}>
     
        <div style={{display:"flex", flexWrap:"wrap"}}>
        <h4 style={{textAlign:"center", backgroundColor:"#ffc40c", color:"white",fontStyle:"bold", fontWeight:"700",width:"100%", marginTop:"1%", padding:"0.5%"}}>Employee data 
</h4>
        </div>
        {show?<Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <p>
                  Are you sure you want to delete this entry?
                </p>
               
                <Button variant="outline-danger" onClick={() => deleteData()}>Yes</Button>
                <Button variant="outline-danger" style ={{marginLeft:"2%"}} onClick={() => setShow(false)}>No</Button>
        </Alert>:null}
        
        <div style={{ marginTop: '20px' ,padding: '0 20px'}}>
            <Table striped bordered responsive style={{ border: '1px solid #A8AAA9'}}>
            <thead>
                <tr>
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Designation</th>
                <th>Department</th>
                <th>Gender</th>
                <th>Date of Birth</th>
                <th>Date of Joining</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                <tr key={item.id}>
                    <td>{item.employeeId}</td>
                    <td>{item.employeeName}</td>
                    <td>{item.designation}</td>
                    <td>{item.department}</td>
                    <td>{item.gender?"Female":"Male"}</td>
                    <td>{item.date_of_birth}</td>
                    <td>{item.date_of_join}</td>
                    <td>
                    <RiEdit2Fill style={{color:"#48b4bb"}} onClick={() => navigate('/editUserData',{state:{id: item.employeeId, name: item.employeeName, designation:item.designation, department:item.department, gender:item.gender, date_of_birth:item.date_of_birth, date_of_join:item.date_of_join, email:item.email}})}/>
                    <RiDeleteBinLine style={{color:"red", marginLeft:"16%"}} onClick={() => showAlert(item.employeeId)}/> 
                    </td>
                </tr>
                ))}
            </tbody>
            </Table>
        </div>
        <Button variant="outline-warning" style={{marginBottom:"7%", backgroundColor:"#ffc40c",color:"white", marginLeft:"88%", fontStyle:"bold", fontWeight:"700"}} onClick={handleAdd}><HiUserAdd/>Add employee</Button>
        <ToastContainer/>
        <Footer/>
    </div>
  );
}

export default UserDataTable;