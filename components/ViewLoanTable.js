import React from 'react';
import Table from 'react-bootstrap/Table';
import Header from './Header';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';

function ViewLoanTable() {
    const[datas, setDatas] = useState([]);
  
    const location = useLocation();
    const id = location.state.id;

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
  // const dummyLoanData = [
  //   {
  //     id: 1,
  //     loanId: 'L001',
  //     loanType: 'Personal Loan',
  //     duration: 5,
  //   },
  //   {
  //     id: 2,
  //     loanId: 'L002',
  //     loanType: 'Home Loan',
  //     duration: 15,
  //   },
  //   // Add more dummy loan data entries here
  // ];

  return (
    <div>
      <Header/>
      <div style={{ marginTop: '20px', padding: '0 20px' }}>
        <div>
          
        </div>
        <Table striped bordered responsive className="table-striped-dark">
          <thead>
            <tr>
              <th>Loan ID</th>
              <th>Loan Type</th>
              <th>Duration (Years)</th>
              <th>Card issue date</th>
            </tr>
          </thead>
          <tbody>
            
            {datas.map((item) => (
              // datas.length >0?
              <tr key={item.id}>
                <td>{item.loan_id}</td>
                <td>{item.loanType}</td>
                <td>{item.duration_in_year}</td>
                <td>{item.card_issue_date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ViewLoanTable;