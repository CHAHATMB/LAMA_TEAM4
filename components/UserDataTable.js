import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'; // Import the icons
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

function UserDataTable() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('API_URL');
//       setData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

const dummyData = [
    {
      id: 1,
      employeeId: 'E001',
      employeeName: 'John Doe',
      designation: 'Manager',
      department: 'Finance',
      gender: 'Male',
      dateOfBirth: '1990-05-15',
      dateOfJoining: '2020-02-10',
    },
    {
      id: 2,
      employeeId: 'E002',
      employeeName: 'Jane Smith',
      designation: 'Executive',
      department: 'Finance',
      gender: 'Female',
      dateOfBirth: '1988-10-20',
      dateOfJoining: '2019-07-05',
    },
    // Add more dummy data entries here
  ];

  return (
    <div>
        <Header/>
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
                {dummyData.map((item) => (
                <tr key={item.id}>
                    <td>{item.employeeId}</td>
                    <td>{item.employeeName}</td>
                    <td>{item.designation}</td>
                    <td>{item.department}</td>
                    <td>{item.gender}</td>
                    <td>{item.dateOfBirth}</td>
                    <td>{item.dateOfJoining}</td>
                    <td>
                    <Button variant="info" size="sm" className="me-2" style={{ backgroundColor: '#17a2b8' }}>
                    <AiOutlineEdit /> {/* Edit Icon */}
                  </Button>
                  <Button variant="danger" size="sm" style={{ backgroundColor: '#dc3545' }}>
                    <AiOutlineDelete /> {/* Delete Icon */}
                  </Button>
                    </td>
                </tr>
                ))}
            </tbody>
            </Table>
        </div>
    </div>
  );
}

export default UserDataTable;

