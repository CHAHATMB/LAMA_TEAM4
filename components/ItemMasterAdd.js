import React, { useState } from 'react';
import './ItemMasterAdd.css'; // Import your CSS file
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ItemMasterAdd = () => {
  const [itemId, setItemId] = useState('');
  const [itemCategory, setItemCategory] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemValue, setItemValue] = useState(0);
  const [itemStatus, setItemStatus] = useState('Yes');
  const [itemMake, setItemMake] = useState('');

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
   axios({
    method: 'POST',
    url: 'http://localhost:5000/api/item/add',
    data: {
      item_id: itemId,
      item_category: itemCategory,
      item_description: itemDescription,
      item_value: itemValue,
      issue_status: itemStatus,
      item_make: itemMake
    }
   })
   navigate('/itemMasterDataTable');
  };

  return (
    <div>
    <Header/>
    <div className="containerForm">
      <h2 className="form-title">Item Form</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label">Item ID:</label>
        <input
          type="text"
          value={itemId}
          onChange={(e) => setItemId(e.target.value)}
          required
        />

        <label className="form-label">Item Category:</label>
        <select
          value={itemCategory}
          onChange={(e) => setItemCategory(e.target.value)}
          required
        >
          {/* <option value="">Select Category</option> */}
          <option value="Furniture">Furniture</option>
          <option value="Crockery">Crockery</option>
          <option value="Stationary">Stationary</option>
          {/* Add more categories as needed */}
        </select>

        <label className="form-label">Item Description:</label>
        <textarea
          value={itemDescription}
          onChange={(e) => setItemDescription(e.target.value)}
          required
        />

        <label className="form-label">Item Value:</label>
        <input
          type="number"
          value={itemValue}
          onChange={(e) => setItemValue(e.target.value)}
          required
        />

        <label className="form-label">Item Status:</label>
        <select
          value={itemStatus}
          onChange={(e) => setItemStatus(e.target.value)}
          required
        >
          {/* <option value="">Select status</option> */}
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label className="form-label">Item Make:</label>
        <select
          value={itemMake}
          onChange={(e) => setItemMake(e.target.value)}
          required
        >
          {/* <option value="">Select Make</option> */}
          <option value="Wooden">Wooden</option>
          <option value="Glass">Glass</option>
          <option value="Plastic">Plastic</option>
          {/* Add more make options as needed */}
        </select>
        <button className="form-button" type="submit">Submit</button>
      </form>
    </div>
    {/* <Footer/> */}
    </div>
  );
};

export default ItemMasterAdd;
