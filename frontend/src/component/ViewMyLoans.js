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
import { useLocation } from 'react-router-dom';

function ViewMyLoans() {
    const[datas, setDatas] = useState([]);
    const location = useLocation();
    const id = location.state.id;
    const name = location.state.name;
    const designation = location.state.designation;
    const department = location.state.department;
    const gender = location.state.gender;

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
useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
  try {
    const response = await axios.get('http://172.20.0.54:8080/api/loancard/myloans/'.concat(location.state.id).toString());
    setDatas(response.data);
    console.log(response);
    console.log(id);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

  return (
    <div>
     
      {/* {data.map((item) => (

      ))} */}
      <div style={{display:"flex", flexWrap:"wrap"}}>
        {gender===1?
        <img src = {female} style={{marginLeft:"5%", marginTop:"1.2%"}}/>:
        <img src = {male} style={{marginLeft:"5%", marginTop:"1.2%"}}/>
        }
      
      <div style={{marginTop:"2%"}}>
      <h4>{name}</h4>
      <h5 style={{fontStyle:"italic"}}>{designation}, {department}</h5>
      </div>
      

      </div>

      <h4 style={{textAlign:"center", backgroundColor:"#ffc40c", color:"white",fontStyle:"bold", fontWeight:"700",width:"100%", marginTop:"1%", padding:"0.5%"}}>My loans</h4>
      <div style={{ marginTop: '20px', padding: '0 20px' }}>
        <Table striped bordered responsive className="table-striped-dark">
          <thead>
            <tr>
              <th>Loan ID</th>
              <th>Loan Type</th>
              <th>Card Issue Date</th>
              <th>Duration (months)</th>
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {datas.map((item) => (
              item.loan_id === null? <h4>No loan cards issued! </h4>:(
              <tr key={item.id}>
                <td>{item.loan_id}</td>
                <td>{item.loanType}</td>
                <td>{item.card_issue_date}</td>
                <td>{item.duration_in_year}</td>
                {/* <td> */}
                {/* <RiEdit2Fill style={{color:"#48b4bb"}}/> */}
                {/* <RiDeleteBinLine style={{color:"red", marginLeft:"16%"}} />  */}
                {/* </td> */}
              </tr>
              )
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ViewMyLoans;