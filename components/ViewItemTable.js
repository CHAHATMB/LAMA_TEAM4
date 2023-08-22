import React from 'react';
import Table from 'react-bootstrap/Table';
import Header from './Header';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';

function ViewItemTable() {
    const[data, setData] = useState([]);
    const location = useLocation();

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('http://172.20.0.54:8080/api/item/myitem/'.concat(location.state.id).toString());
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
              <th>Issue ID</th>
              <th>Item description</th>
              <th>Item make</th>
              <th>Item category</th>
              <th>Item valuation</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.issue_id}</td>
                <td>{item.item_description}</td>
                <td>{item.item_make}</td>
                <td>{item.item_category}</td>
                <td>{item.item_valuation}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ViewItemTable;