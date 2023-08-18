import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'; // Import the icons
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import { RiEdit2Fill, RiDeleteBinLine} from 'react-icons/ri';

function UserDataTable() {
  const [data, setData] = useState([]);

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

 

  function deleteData (id)  {
    // try {
    //   const response = axios.post('http://172.20.0.54:8080/api/employee/delete/'.concat(id).toString());
    //   console.log(response.data);
    // } catch (error) {
    //   console.error('Error deleting data:', error);
    // }
  };


// const dummyData = [
//     {
//       id: 1,
//       employeeId: 'E001',
//       employeeName: 'John Doe',
//       designation: 'Manager',
//       department: 'Finance',
//       gender: 'Male',
//       dateOfBirth: '1990-05-15',
//       dateOfJoining: '2020-02-10',
//     },
//     {
//       id: 2,
//       employeeId: 'E002',
//       employeeName: 'Jane Smith',
//       designation: 'Executive',
//       department: 'Finance',
//       gender: 'Female',
//       dateOfBirth: '1988-10-20',
//       dateOfJoining: '2019-07-05',
//     },
//     // Add more dummy data entries here
//   ];

  return (
    <div>
        <Header/>
        <h4 style={{textAlign:"center", backgroundColor:"#ffc40c", color:"white",fontStyle:"bold", fontWeight:"700",width:"100%", marginTop:"1%", padding:"0.5%"}}>Employee data</h4>
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
                    <RiEdit2Fill style={{color:"#48b4bb"}}/>
                    <RiDeleteBinLine style={{color:"red", marginLeft:"16%"}} onClick={deleteData(item.employeeId)}/> 
                    </td>
                </tr>
                ))}
            </tbody>
            </Table>
        </div>

        <Footer/>
    </div>
  );
}

export default UserDataTable;
