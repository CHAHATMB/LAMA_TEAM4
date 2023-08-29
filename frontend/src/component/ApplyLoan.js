import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { useLoaderData, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ApplyLoan() {
    const [item_category, setItemCategory] = useState("");
    const [item_make, setItemMake] = useState("");
    const [item_valuation, setItemVal] = useState(0);
    
    const [item_description, setItemDescription] = useState("");
    const location = useLocation();
    const employeeId = location.state.id;
    const navigate = useNavigate();

    const storeDesc=(e)=>{
      setItemDescription(e.target.value)
    }

    const storeValue=(e)=>{
      setItemVal(e.target.value)
    }
    
    const handleMake =(e) =>{
      setItemMake(e.target.value);
    }
    const handleChange = (e) =>{
        setItemCategory(e.target.value);
    }
    useEffect(()=>{
        setItemCategory(item_category);
        console.log(item_category);
    
    }, [item_category]);

    useEffect(()=>{
      setItemMake(item_make);
      console.log(item_make);
  
  }, [item_make]);
    
    const handleSubmit = () =>{
     
      axios({
        method: 'POST',
        url: 'http://172.20.0.54:8080/api/loancard/applyloans',
        data:{
          employeeId: location.state.id,
          item_category: item_category,
          item_description: item_description,
          item_make: item_make,
          item_valuation: item_valuation
        } ,
       }).then((response)=>{
        console.log(response)
        navigate("/employeeDashboard", {state:{employeeId:location.state.id}});

       })
    }

    
  return (
    <>
   
    <div style={{ width:'60%', padding:'2px', paddingBottom:"15px",marginTop:'7%', marginLeft:'20%' ,overflowY:'auto', height:'90%', boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.25)"}}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title" style={{backgroundColor:"#ffc40c", color:"white", fontWeight:"700"}}>Loan application form</h3>
          <div style={{display:"flex", flexWrap:"wrap"}}>
            <div style={{marginTop:"1%"}}>
                <div className="form-group mt-3">
                    <label style={{fontSize:"15px"}}>Employee ID</label>
                    <input style={{border:"outset"}}
                    type="text"
                    className="form-control mt-1"
                    placeholder="Enter ID"
                    defaultValue={employeeId}
                    disabled
                    //   onChange={storeEmail}
                    />
                </div>
                <div className="form-group mt-3">
                    <label style={{fontSize:"15px"}}>Item Category</label>
                    <br></br>
                    <select style={{padding:"2%", width:"100%", border:"outset"}} onChange={handleChange}>
                    <option style={{display:"none"}} disabled selected value> Select </option>
                    <option value="Furniture"> Furniture</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Crockery">Crockery</option>
                    <option value="Stationery">Stationery</option>
                    </select>
                

                </div>
                <div className="form-group mt-3">
                    <label style={{fontSize:"15px"}}>Item value</label>
                    <input style={{border:"outset"}}
                    type="text"
                    className="form-control mt-1"
                    placeholder="Enter value"
                    onChange={storeValue}
                    />
            </div>
          </div> 
          <div style={{marginLeft:"30%"}}>
          <div className="form-group mt-3">
                    <label style={{fontSize:"15px"}}>Item description</label>
                    <input style={{border:"outset"}}
                    type="text"
                    className="form-control mt-1"
                    placeholder="Enter description"
                   onChange={storeDesc}
                    />
            </div>
            <div className="form-group mt-3">
                    <label style={{fontSize:"15px"}}>Item make</label>
                    <br></br>
                    <select style={{padding:"2%", width:"100%", border:"outset"}} onChange={handleMake}>
                    <option style={{display:"none"}} disabled selected value> Select </option>
                    <option value="Wooden"> Wooden</option>
                    <option value="Metal">Metal</option>
                    <option value="Plastic">Plastic</option>
                    <option value="Glass">Glass</option>
                    <option value="China clay">China clay</option>
                    <option value="Fiber">Fiber</option>
                    </select>
            </div>
            <div className="d-grid gap-2 mt-3">
            <Button  style={{width:"100%", marginTop:"15%", backgroundColor:"#48b4bb"}} onClick={handleSubmit}>
                Apply
            </Button>
          </div>
          </div>
        </div>
        
         
               

          {/* <p className="CreateNew"><NavLink>Forgot password?</NavLink>
          </p> */}

        </div>
      </div>
      <Footer/>
    </>
);
}

export default ApplyLoan
