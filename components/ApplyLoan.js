import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from './Header';
import Footer from './Footer';

function ApplyLoan() {
    const [itemCategory, setItemCategory] = useState("");
    
    const handleChange = (e) =>{
        setItemCategory(e.target.value);
    }
    useEffect(()=>{
        setItemCategory(itemCategory);
        console.log(itemCategory);
    
    }, [itemCategory]);
       
    
  return (
    <>
    <Header/>
    <div style={{ width:'60%', padding:'2px', paddingBottom:"15px",marginTop:'7%', marginLeft:'20%' ,overflowY:'auto', height:'90%', boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.25)"}}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title" style={{color:"#d19900"}}>Loan application form</h3>
          <div style={{display:"flex", flexWrap:"wrap"}}>
            <div style={{marginTop:"1%"}}>
                <div className="form-group mt-3">
                    <label style={{fontSize:"15px"}}>Employee ID</label>
                    <input style={{border:"outset"}}
                    type="text"
                    className="form-control mt-1"
                    placeholder="Enter ID"
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
                    </select>
                

                </div>
                <div className="form-group mt-3">
                    <label style={{fontSize:"15px"}}>Item value</label>
                    <input style={{border:"outset"}}
                    type="text"
                    className="form-control mt-1"
                    placeholder="Enter value"
                    //   onChange={storeEmail}
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
                    //   onChange={storeEmail}
                    />
            </div>
            <div className="form-group mt-3">
                    <label style={{fontSize:"15px"}}>Item make</label>
                    <br></br>
                    <select style={{padding:"2%", width:"100%", border:"outset"}} onChange={handleChange}>
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
            <Button style={{width:"100%", marginTop:"15%"}}>
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
