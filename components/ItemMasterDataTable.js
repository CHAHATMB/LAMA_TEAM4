import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
//import './ItemDataTable.css'; // Import the CSS file
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';

function ItemMasterDataTable() {
  const[data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://172.20.0.54:8080/api/items');
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // const dummyItemData = [
  //   {
  //     id: 1,
  //     itemId: 'I001',
  //     description: 'Laptop',
  //     issueStatus: 'Yes',
  //     itemMake: 'Dell',
  //     itemCategory: 'Electronics',
  //     itemValuation: '$1000',
  //   },
  //   {
  //     id: 2,
  //     itemId: 'I002',
  //     description: 'Chair',
  //     issueStatus: 'No',
  //     itemMake: 'IKEA',
  //     itemCategory: 'Furniture',
  //     itemValuation: '$150',
  //   },
  //   // Add more dummy item data entries here
  // ];

  return (
    <div>
        <Header/>
      <div style={{ marginTop: '20px', padding: '0 20px' }}>
        <Table striped bordered responsive className="table-striped-dark">
          <thead>
            <tr>
              <th>Item ID</th>
              {/* <th>Description</th> */}
              <th>Issue Status</th>
              <th>Item Make</th>
              <th>Item Category</th>
              <th>Item Valuation</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.item_id}</td>
                {/* <td>{item.description}</td> */}
                <td>{item.issue_status==1?"Yes":"No"}</td>
                <td>{item.item_make}</td>
                <td>{item.item_category}</td>
                <td>{item.item_valuation}</td>
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
      <Footer/>
    </div>
  );
}

export default ItemMasterDataTable;
