import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
//import './ItemDataTable.css'; // Import the CSS file
import Header from './Header';

function ItemMasterDataTable() {
  const dummyItemData = [
    {
      id: 1,
      itemId: 'I001',
      description: 'Laptop',
      issueStatus: 'Yes',
      itemMake: 'Dell',
      itemCategory: 'Electronics',
      itemValuation: '$1000',
    },
    {
      id: 2,
      itemId: 'I002',
      description: 'Chair',
      issueStatus: 'No',
      itemMake: 'IKEA',
      itemCategory: 'Furniture',
      itemValuation: '$150',
    },
    // Add more dummy item data entries here
  ];

  return (
    <div>
        <Header/>
      <div style={{ marginTop: '20px', padding: '0 20px' }}>
        <Table striped bordered responsive className="table-striped-dark">
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Description</th>
              <th>Issue Status</th>
              <th>Item Make</th>
              <th>Item Category</th>
              <th>Item Valuation</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyItemData.map((item) => (
              <tr key={item.id}>
                <td>{item.itemId}</td>
                <td>{item.description}</td>
                <td>{item.issueStatus}</td>
                <td>{item.itemMake}</td>
                <td>{item.itemCategory}</td>
                <td>{item.itemValuation}</td>
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

export default ItemMasterDataTable;
