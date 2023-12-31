import React, { useState } from 'react';
import './ItemMasterAdd.css'; // Import your CSS file
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Toast } from 'react-bootstrap';

const ItemMasterAdd = () => {
  const [itemId, setItemId] = useState('');
  const [itemCategory, setItemCategory] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemValue, setItemValue] = useState(0);
  const [itemStatus, setItemStatus] = useState('Yes');
  const [itemMake, setItemMake] = useState('');

  let navigate = useNavigate();

  const handleItemCatagoryChange = (event) => {
    setItemCategory(event.target.value);
  };

  const handleItemMakeChange = (event) => {
    setItemMake(event.target.value);
  };
 

  const handleSubmit = (event) => {

    if(!itemCategory || !itemMake){
      toast.error("Please select one of the options")
      return;
    }

   axios({
    method: 'POST',
    url: 'http://172.20.0.54:8080/api/item/add',
    data: {
      item_category: itemCategory,
      item_description: itemDescription,
      item_valuation: itemValue,
      issue_status: itemStatus,
      item_make: itemMake
    }
   }).then((response)=>{
    console.log(response);
   }).catch((error)=>{
      const errorMessage = error.response.data.message || 'Invalid data';
      console.log(errorMessage);

      toast.error(errorMessage, {
        position:'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

   })
   navigate('/itemMasterDataTable',{state : {fromItemMasterAdd:true,fromEditItemData: false}});
  };

  return (
    <div>
   
    <div className="containerForm">
      <h2 className="form-title">Item Form</h2>
      <form >
        {/* <label className="form-label">Item ID:</label>
        <input
          type="text"
          value={itemId}
          onChange={(e) => setItemId(e.target.value)}
          required
        /> */}

        <label className="form-label">Item Category:</label>

        <select style={{ width:"100%"}} value = {itemCategory} onChange={handleItemCatagoryChange} required>
                    <option value = "" disabled> Select </option>
                    <option value="Furniture"> Furniture</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Crockery">Crockery</option>
                    <option value="Stationery">Stationery</option>
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

        
        <select style={{ width:"100%"}} value = {itemMake} onChange={handleItemMakeChange} required>
                    <option value = "" disabled> Select </option>
                    <option value="Wooden"> Wooden</option>
                    <option value="Glass">Glass</option>
                    <option value="Metal">Metal</option>
                    <option value="Plastic">Plastic</option>
                    <option value="Fiber">Fiber</option>
                    <option value="China CLay">China Clay</option>
        </select>

        <button className="form-button" type="submit" onClick={()=>handleSubmit()}>Submit</button>
      </form>
    </div>
    <ToastContainer/>
    {/* <Footer/> */}
    </div>
  );
};

export default ItemMasterAdd;