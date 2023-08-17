import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
//import './LoanDataTable.css'; // Import the CSS file
import Header from './Header';
import axios from 'axios';
import { useEffect,useState } from 'react';

function LoanDataTable() {
    const[data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('http://172.20.0.54:8080/api/loancards');
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
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
      <Header/>
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
              <tr key={item.id}>
                <td>{item.loan_id}</td>
                <td>{item.loan_type}</td>
                <td>{item.duration_in_year}</td>
                <td>
                  <Button variant="info" size="sm" className="me-2">
                    <AiOutlineEdit />
                  </Button>
                  <Button variant="danger" size="sm">
                    <AiOutlineDelete />
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

export default LoanDataTable;