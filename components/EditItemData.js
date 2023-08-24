import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './AddUserData.css'; // Import your CSS file
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

const EditItemData = () => {
    const location = useLocation();
  
    const [item_id, setItemId] = useState(location.state.itemId);
    const [itemMake, setItemMake] = useState(location.state.itemMake);
    const [itemCategory, setItemCategory] = useState(location.state.itemCategory);
    const [itemValuation, setItemValuation] = useState(location.state.valuation);
    const [item_description, setItem_description] = useState(location.state.item_description);
    const [issue_status, setIssue_status] = useState(location.state.issue_status);

  const [data, setData] = useState([]);

  let navigate = useNavigate();


  const handleSubmit = () => {
    // Handle form submission here

    console.log('Form submission',{
         item_id,
         itemCategory,
        item_description,
         itemValuation,
         issue_status,
         itemMake,
    });

    axios({
      method: 'POST',
      url: 'http://172.20.0.54:8080/api/item/edit/'.concat(location.state.itemId).toString(),
      data:{
        item_id: item_id,
        item_category: itemCategory,
        item_description: item_description,
        item_valuation: itemValuation,
        issue_status: issue_status,
        item_make: itemMake
      },
    }).then((data)=>{
        console.log(data);
       //add a popup
        alert("item data Updated Successfully");
      
      
    })
    //navigate to thetable page
    navigate('/itemMasterDataTable')
    console.log("Submit")
  
  };

  return (
    <div>
    <Header/>
    <div className="containerForm">
      <h2 className="form-title">Item Form</h2>
      <form>
        <label className="form-label">Item ID:</label>
        <input
          type="text"
          defaultValue={location.state.itemId}
          onChange={(e) => setItemId(e.target.value)}
          disabled
        />

        <label className="form-label">Item Category:</label>
        <select
          defaultValue={location.state.itemCategory}
          onChange={(e) => setItemCategory(e.target.value)}
          required
        >
          {/* <option value="">Select Category</option> */}
          <option value="Furniture">Furniture</option>
          <option value="Crockery">Crockery</option>
          <option value="Stationary">Electronics</option>
          {/* Add more categories as needed */}
        </select>

        <label className="form-label">Item Description:</label>
        <textarea
          defaultValue={location.state.item_description}
          onChange={(e) => setItem_description(e.target.value)}
          required
        />

        <label className="form-label">Item Value:</label>
        <input
          type="number"
          defaultValue={location.state.valuation}
          onChange={(e) => setItemValuation(e.target.value)}
          required
        />

        <label className="form-label">Item Status:</label>
        <select
          defaultValue={location.state.issue_status}
          onChange={(e) => (e.target.value) == "Yes"? setIssue_status("1"):setIssue_status("0")
            }
          required
        >
          {/* <option value="">Select status</option> */}
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label className="form-label">Item Make:</label>
        <select
          defaultValue={location.state.itemMake}
          onChange={(e) => setItemMake(e.target.value)}
          required
        >
          {/* <option value="">Select Make</option> */}
          <option value="Wooden">Wooden</option>
          <option value="Glass">Glass</option>
          <option value="Plastic">Plastic</option>
         
        </select>
        <button className="form-button" onClick={() => handleSubmit()}>Submit</button>
      </form>
    </div>
    {/* <Footer/> */}
    </div>
  );
};

export default EditItemData;