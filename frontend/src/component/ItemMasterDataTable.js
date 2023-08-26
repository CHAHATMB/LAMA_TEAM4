import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import {RiEdit2Fill} from 'react-icons/ri';
import {RiDeleteBinLine} from 'react-icons/ri'
//import './ItemDataTable.css'; // Import the CSS file
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

function ItemMasterDataTable() {
  const[data, setData] = useState([]);
  const [id, setId] = useState();
  const [show, setShow] = useState(false);
  let navigate = useNavigate();

  const showAlert = (id) =>{
    setId(id);
    setShow(true);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://172.20.0.54:8080/api/item/all');
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const deleteData = async () => {
    try {
      
      const response = await axios.post('http://172.20.0.54:8080/api/item/delete/'.concat(id).toString()).then(
        ()=>{
          fetchData();
          setShow(false);
        }
      )
      console.log(response.data);
      
      console.log("delete");
      
     
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div>
        <h4 style={{textAlign:"center", backgroundColor:"#ffc40c", color:"white",fontStyle:"bold", fontWeight:"700",width:"100%", marginTop:"1%", padding:"0.5%"}}>Items data</h4>
        <Tabs defaultActiveKey="furniture" className="mb-3" fill>
            <Tab eventKey="furniture" title="Furniture" >
            <div style={{ marginTop: '20px', padding: '0 20px' }}>
            {show?<Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <p>
                  Are you sure you want to delete this entry?
                </p>
              
                <Button variant="outline-danger" onClick={() => deleteData()}>Yes</Button>
                <Button variant="outline-danger" style ={{marginLeft:"2%"}} onClick={() => setShow(false)}>No</Button>
        </Alert>:null}
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
                
                {data.map((item) => (
                item.item_category === "Furniture"?(
                <tr key={ item.ids}>                    
                    <td>{item.item_id}</td>
                    <td>{item.item_description}</td>
                    <td>{item.issue_status==1?"Yes":"No"}</td>
                    <td>{item.item_make}</td>
                    <td>{item.item_category}</td>
                    <td>{item.item_valuation}</td>
                    <td>
                    <RiEdit2Fill style={{color:"#48b4bb"}}
                    onClick = {() => navigate("/editItemData",{state: 
                      {itemId: item.item_id,
                      itemCategory: item.item_category,
                      itemMake: item.item_make,
                      valuation : item.item_valuation,
                      issue_status: item.issue_status,
                      item_description: item.item_description}})}/>
                    <RiDeleteBinLine style={{color:"red", marginLeft:"16%"}}
                     onClick={() => showAlert(item.item_id)}/>
                    </td>                   
                </tr>
                ):null
                ))}
            </tbody>
            </Table>
            </div>
            </Tab>
        <Tab eventKey="electronics" title="Electronics">
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
            {data.map((item) => (
            item.item_category === "Electronic"?(
              <tr key={item.ids}>
                <td>{item.item_id}</td>
                <td>{item.item_description}</td>
                <td>{item.issue_status==1?"Yes":"No"}</td>
                <td>{item.item_make}</td>
                <td>{item.item_category}</td>
                <td>{item.item_valuation}</td>
                <td>
                <RiEdit2Fill style={{color:"#48b4bb"}}
                onClick = {() => navigate("/editItemData",{state: 
                  {itemId: item.item_id,
                  itemCategory: item.item_category,
                  itemMake: item.item_make,
                  valuation : item.item_valuation,
                  issue_status: item.issue_status,
                  item_description: item.item_description}})}/>
                 <RiDeleteBinLine style={{color:"red", marginLeft:"16%"}}
                     onClick={() => showAlert(item.item_id)}/>
                </td>
              </tr>
            ):null
            ))};
          </tbody>
        </Table>
      </div>
    </Tab>
    <Tab eventKey="crockery" title="Crockery">
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
            {data.map((item) => (
            item.item_category === "Crockery"?(
              <tr key={item.ids}>
                <td>{item.item_id}</td>
                <td>{item.item_description}</td>
                <td>{item.issue_status==1?"Yes":"No"}</td>
                <td>{item.item_make}</td>
                <td>{item.item_category}</td>
                <td>{item.item_valuation}</td>
                <td>
                <RiEdit2Fill style={{color:"#48b4bb"}} 
                  onClick = {() => navigate("/editItemData",{state: 
                      {itemId: item.item_id,
                      itemCategory: item.item_category,
                      itemMake: item.item_make,
                      valuation : item.item_valuation,
                      issue_status: item.issue_status,
                      item_description: item.item_description}})}/>
                 <RiDeleteBinLine style={{color:"red", marginLeft:"16%"}}
                     onClick={() => showAlert(item.item_id)}/>
                </td>
              </tr>
            ):null
            ))}
          </tbody>
        </Table>
      </div>
    </Tab>

    <Tab eventKey="stationery" title="Stationery">
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
            {data.map((item) => (
            item.item_category === "Stationery"?(
              <tr key={item.ids}>
                <td>{item.item_id}</td>
                <td>{item.item_description}</td>
                <td>{item.issue_status==1?"Yes":"No"}</td>
                <td>{item.item_make}</td>
                <td>{item.item_category}</td>
                <td>{item.item_valuation}</td>
                <td>
                <RiEdit2Fill style={{color:"#48b4bb"}} 
                  onClick = {() => navigate("/editItemData",{state: 
                      {itemId: item.item_id,
                      itemCategory: item.item_category,
                      itemMake: item.item_make,
                      valuation : item.item_valuation,
                      issue_status: item.issue_status,
                      item_description: item.item_description}})}/>
                 <RiDeleteBinLine style={{color:"red", marginLeft:"16%"}}
                     onClick={() => showAlert(item.item_id)}/>
                </td>
              </tr>
            ):null
            ))}
          </tbody>
        </Table>
      </div>
    </Tab>
        </Tabs> 
       
      
      <Footer/>
      <Button variant="outline-warning" style={{marginBottom:"7%", backgroundColor:"#ffc40c",color:"white", marginLeft:"88%", fontStyle:"bold", fontWeight:"700"}} onClick={() => navigate("/itemMasterAdd")}>Add items</Button>

    </div>
  );
}

export default ItemMasterDataTable;