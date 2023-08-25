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

function ItemMasterDataTable() {
  const[data, setData] = useState([]);
  const navigate = useNavigate();

  function handleAdd()
  {
    navigate("/itemMasterAdd");
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
        <h4 style={{textAlign:"center", backgroundColor:"#ffc40c", color:"white",fontStyle:"bold", fontWeight:"700",width:"100%", marginTop:"1%", padding:"0.5%"}}>Items data</h4>
        <Tabs defaultActiveKey="furniture" className="mb-3" fill>
            <Tab eventKey="furniture" title="Furniture" >
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
                item.item_category === "Furniture"?(
                <tr key={ item.id}>
                    
                    <td>{item.item_id}</td>
                    {/* <td>{item.description}</td> */}
                    <td>{item.issue_status==1?"Yes":"No"}</td>
                    <td>{item.item_make}</td>
                    <td>{item.item_category}</td>
                    <td>{item.item_valuation}</td>
                    <td>
                    <RiEdit2Fill style={{color:"#48b4bb"}}/>
                    <RiDeleteBinLine style={{color:"red", marginLeft:"16%"}}/>
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
            item.item_category === "Electronic"?(
              <tr key={item.id}>
                <td>{item.item_id}</td>
                {/* <td>{item.description}</td> */}
                <td>{item.issue_status==1?"Yes":"No"}</td>
                <td>{item.item_make}</td>
                <td>{item.item_category}</td>
                <td>{item.item_valuation}</td>
                <td>
                <RiEdit2Fill style={{color:"#48b4bb"}}/>
                <RiDeleteBinLine style={{color:"red", marginLeft:"16%"}}/>
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
            item.item_category === "Crockery"?(
              <tr key={item.id}>
                <td>{item.item_id}</td>
                {/* <td>{item.description}</td> */}
                <td>{item.issue_status==1?"Yes":"No"}</td>
                <td>{item.item_make}</td>
                <td>{item.item_category}</td>
                <td>{item.item_valuation}</td>
                <td>
                <RiEdit2Fill style={{color:"#48b4bb"}}/>
                <RiDeleteBinLine style={{color:"red", marginLeft:"16%"}}/>
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
            item.item_category === "Stationery"?(
              <tr key={item.id}>
                <td>{item.item_id}</td>
                {/* <td>{item.description}</td> */}
                <td>{item.issue_status==1?"Yes":"No"}</td>
                <td>{item.item_make}</td>
                <td>{item.item_category}</td>
                <td>{item.item_valuation}</td>
                <td>
                <RiEdit2Fill style={{color:"#48b4bb"}}/>
                <RiDeleteBinLine style={{color:"red", marginLeft:"16%"}}/>
                </td>
              </tr>
            ):null
            ))}
          </tbody>
        </Table>
      </div>
    </Tab>
        </Tabs> 
       
        <Button variant="outline-warning" style={{marginBottom:"7%", backgroundColor:"#ffc40c",color:"white", marginLeft:"88%", fontStyle:"bold", fontWeight:"700"}} onClick={handleAdd}>Add Item</Button>

      <Footer/>
    </div>
  );
}

export default ItemMasterDataTable;