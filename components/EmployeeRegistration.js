import React from "react";
import { Button, Container } from "react-bootstrap";
import Header from "./Header";

function EmployeeRegistration(){
    return(
        <div>
            <Header/>
            <Container style={{marginLeft:"30%", width:"40%", marginRight:"30%", height:"50%",overflowY:"auto", background:"rgba(255,255,255,0)", boxShadow:"0 8px 32px 0 rgba(31, 38, 135, 0.37)", backdropFilter:"blur (4px)", borderRadius:"8px",WebkitBackdropFilter:"blur(4px)", border:"1px solid rgba(255, 255, 255, 0.18)", marginTop:"5%"}}>
                <h5 style={{fontFamily:"sans-serif", textAlign:"center", marginTop:"3%"}}>Register</h5>
                
                <div className="form-group mt-3">
                <label>Employee ID</label>
                <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Employee ID"
                    required = 'true'
                    // onChange={handleEmail}
                />
                </div>
                   
                <div className="form-group mt-3">
                    <label>Enter E-mail</label>
                    <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Enter E-mail"
                        required = 'true'
                        // onChange={handleEmail}
                    />
                </div>

                <div className="form-group mt-3">
                    <label>Create Password</label>
                    <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter E-mail"
                        required = 'true'
                        // onChange={handleEmail}
                    />
                </div>
                <Button style={{marginTop:"2%", marginBottom:"2%", width:"20%", marginTop:"3%"}}>Submit</Button>
            </Container>
        </div>
    );


}

export default EmployeeRegistration