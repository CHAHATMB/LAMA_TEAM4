import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
//import './LoanDataTable.css'; // Import the CSS file
import Header from './Header';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { RiEdit2Fill, RiDeleteBinLine} from 'react-icons/ri';
import Footer from './Footer';
import {HiUserAdd} from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useLocation} from "react-router-dom";


function LoanDataTable() {
    const[data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [id,setId] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('http://172.20.0.54:8080/api/loancard/all');
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const location = useLocation();

    useEffect(() => {
      if(location.state?.fromLoanCardAdd){
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
      if(location.state?.fromLoanCardEdit){
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
    navigate("/loanCardAdd");
  }

  const deleteData = async () => {
    try {
  const response = await axios.post('http://172.20.0.54:8080/api/loancard/delete/'.concat(id).toString()).then(
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
//   const dummyLoanData = [
//     {
//       id: 1,
//       loanId: 'L001',
//       loanType: 'Personal Loan',
//       duration: 5,
//     },
//     {
//       id: 2,
//       loanId: 'L002',
//       loanType: 'Home Loan',
//       duration: 15,
//     },
//     // Add more dummy loan data entries here
//   ];

  

  return (
    <div>
   
      {show?<Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <p>
                  Are you sure you want to delete this entry?
                </p>
               
                <Button variant="outline-danger" onClick={() => deleteData()}>Yes</Button>
                <Button variant="outline-danger" style ={{marginLeft:"2%"}} onClick={() => setShow(false)}>No</Button>
        </Alert>:null}
      <h4 style={{textAlign:"center", backgroundColor:"#ffc40c", color:"white",fontStyle:"bold", fontWeight:"700",width:"100%", marginTop:"1%", padding:"0.5%"}}>Loan card data</h4>
      <div style={{ marginTop: '20px', padding: '0 20px' }}>
        <Table striped bordered responsive className="table-striped-dark">
          <thead>
            <tr>
              <th>Loan ID</th>
              <th>Loan Type</th>
              <th>Duration (Years)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              item.loan_id === null? <h4>No loan cards issued! </h4>:(
              <tr key={item.id}>
                <td>{item.loan_id}</td>
                <td>{item.loanType}</td>
                <td>{item.duration_in_year}</td>
                <td>
                <RiEdit2Fill style={{color:"#48b4bb"}} onClick={() => navigate('/editLoanCard',{state:{id:item.loan_id, type:item.loanType, duration:item.duration_in_year}})}/>
                    <RiDeleteBinLine style={{color:"red", marginLeft:"16%"}} onClick={() => showAlert(item.loan_id)} /> 
                </td>
              </tr>
              )
            ))}
          </tbody>
        </Table>
      </div>
      <Button variant="outline-warning" style={{marginBottom:"7%", backgroundColor:"#ffc40c",color:"white", marginLeft:"88%", fontStyle:"bold", fontWeight:"700"}} onClick={handleAdd}>Add loan card</Button>
      <ToastContainer/>
      <Footer/>
    </div>
  );
}

export default LoanDataTable;