import React, { useState } from 'react'; // Don't forget to import useState
import { Button, Container } from "react-bootstrap";
import Header from "./Header";
import axios from "axios";

function EmployeeRegistration(){
    
    const [employeeID, setEmployeeID] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(false);
    const [showOTPField, setShowOTPField] = useState(false); 
    const [showTOTPField, setShowTOTPField] = useState(false); 
    const [otp, setOTP] = useState('');
    const [totp, setTOTP] = useState('');
    const [imageData, setImageData] = useState('');
    const [showGenerateOPTButton,setShowGenerateOTPButton] = useState(true);


    
    const MIN_PASSWORD_LENGTH = 8; 
    const [passwordError, setPasswordError] = useState('');
    const [employeeIDError, setEmployeeIDError] = useState('');

    const handleEmployeeIDChange = (event) => {
        const newEmployeeID = event.target.value;
        setEmployeeID(newEmployeeID);

        if (newEmployeeID.length !== 8) {
            setEmployeeIDError('Employee ID must be 8 characters.');
        } else {
            setEmployeeIDError('');
        }
    };

    const handleEmail = (event) => {
        const email = event.target.value;
        setEmail(email);

    };


    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        setPasswordMatch(newPassword === confirmPassword);

        if (newPassword.length < MIN_PASSWORD_LENGTH) {
            setPasswordError(`Password must be at least ${MIN_PASSWORD_LENGTH} characters.`);
        } else {
            setPasswordError('');
        }
    };



    const handleConfirmPasswordChange = (event) => {
        const newConfirmPassword = event.target.value;
        setConfirmPassword(newConfirmPassword);
        setPasswordMatch(password === newConfirmPassword);
    };

    
    const handleSubmit = () => {
        console.log("here i am")
        if (passwordMatch && password.length >= MIN_PASSWORD_LENGTH) {
            console.log("doing axios");
            axios({
                method: 'POST',
                url: 'http://172.20.0.54:8080/api/auth/register',
                data:{
                  employeeId:employeeID,
                  email: email,
                  password:password
                } 
              }).then((data)=>{
                console.log(data.data);
                if(data.data.data != null){
                    setShowTOTPField(true);
                    setImageData(data.data.data)
                    console.log("workds bro ")
                }

              }).catch((error)=>{
                        console.log("eror we hav ",error);
              })

                setShowGenerateOTPButton(false);
                setShowOTPField(true);

        }
    };

    const handleOTPChange = (event) => {
        setOTP(event.target.value);
    };

    const handleTOTPChange = (event) => {
        setTOTP(event.target.value);
    };

    const handleOTPSubmit = () => {
        // Handle OTP submission logic here
        axios({
            method: 'POST',
            url: 'http://172.20.0.54:8080/api/auth/verifyotp',
            data:{
              employeeId:employeeID,
              email: email,
              otp:otp,
              totpCode:totp
            } 
          }).then((data)=>{
            console.log(data.data);
            

          }).catch((error)=>{
                    console.log("eror we hav ",error);
          })
    };

    return(
        <div>
            <Container style={{marginLeft:"30%", width:"40%", marginRight:"30%", height:"50%",overflowY:"auto", background:"rgba(255,255,255,0)", boxShadow:"0 8px 32px 0 rgba(31, 38, 135, 0.37)", backdropFilter:"blur (4px)", borderRadius:"8px",WebkitBackdropFilter:"blur(4px)", border:"1px solid rgba(255, 255, 255, 0.18)", marginTop:"5%"}}>
                <h5 style={{fontFamily:"sans-serif", textAlign:"center", marginTop:"3%"}}>Register</h5>
                
                <div className="form-group mt-3">
                    <label>Employee ID</label>
                    <input
                        type="text"
                        className={`form-control mt-1 ${employeeIDError ? 'is-invalid' : ''}`}
                        placeholder="Employee ID"
                        value={employeeID}
                        onChange={handleEmployeeIDChange}
                        required
                    />
                    {employeeIDError && (
                        <div className="invalid-feedback">{employeeIDError}</div>
                    )}
                </div>
                   
                <div className="form-group mt-3">
                    <label>Enter E-mail</label>
                    <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Enter E-mail"
                        required = 'true'
                        onChange={handleEmail}
                    />
                </div>

                <div className="form-group mt-3">
                    <label>Create Password</label>
                    <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter Password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                    {passwordError && (
                        <div className="text-danger">{passwordError}</div>
                    )}
                </div>
            
                <div className="form-group mt-3">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        className={`form-control mt-1 ${passwordMatch ? '' : 'is-invalid'}`}
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        required
                    />
                    {!passwordMatch && (
                        <div className="invalid-feedback">Passwords do not match</div>
                    )}
                    

                </div>

                {showGenerateOPTButton && (
                    <Button
                        style={{ marginTop: "2%", marginBottom: "2%", width: "20%", marginTop: "3%", backgroundColor: "#48b4bb" }}
                        onClick={handleSubmit}
                    >
                        Generate OTP
                    </Button>
                )}


                {showOTPField && (
                    <div>
                        <div className="form-group mt-3">
                            <label>Enter OTP</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={handleOTPChange}
                                required
                            />
                        </div>

                        {showTOTPField && (
                            <div>
                            <img src={imageData}/>
                            <div className="form-group mt-3">
                            <label>Enter TOTP</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter TOTP"
                                value={totp}
                                onChange={handleTOTPChange}
                                required
                            />
                            </div>
                        </div>
                        )}

                        <Button
                            style={{ marginTop: "2%", marginBottom: "2%", width: "20%", marginTop: "3%", backgroundColor: "#48b4bb" }}
                            onClick={handleOTPSubmit}
                        >
                            Submit
                        </Button>
                    </div>
                )}

                        
            </Container>
        </div>
    );


}

export default EmployeeRegistration