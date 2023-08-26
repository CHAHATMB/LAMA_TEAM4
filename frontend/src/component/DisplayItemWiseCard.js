import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { Alert } from "react-bootstrap";
import {Button} from "react-bootstrap";

function DisplayItemWiseCard(){
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const location = useLocation();
    const issue_id = location.state.issue_id;
    const loan_type = location.state.loan_type;
    const employee_id = location.state.employee_id;
    const navigate = useNavigate();
    
    const handleSelect = (duration, loan_id) => {
        
        axios({
            method: 'POST',
            url: 'http://172.20.0.54:8080/api/admin/loan/approve',
            data:{
              duration_in_year: duration,
              employeeId: employee_id,
              issueId: issue_id,
              loanType: loan_type,
              loan_id: loan_id,
            } ,
          }).then((response)=>{
            setShow(true);
              console.log(response);
             
          })
        
    }

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async() =>{
        try {
            console.log(loan_type);
            const response = await axios.get('http://172.20.0.54:8080/api/loancard/itemtype/'.concat(loan_type).toString());
            setData(response.data);
            console.log(response);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    };
    return(

        <div>
           
            {show?<Alert variant="success" onClose={() => setShow(false)} dismissible>
                <p>
                  Success! Loan has been approved!
                </p>
            
                <Button variant="outline-success" style ={{marginLeft:"2%"}} onClick={() => navigate("/approveLoan")}>Okay</Button>
        </Alert>:null}
            <div style={{display:"flex", flexWrap:"wrap"}}>
           
            
            {data.map((item) => (
               
               <div style={{marginLeft:"3%",paddingTop:"2%",paddingLeft:"0.5%", paddingRight:"0.5%", paddingBottom:"2%", width:"20%", marginTop:"5%", backgroundColor:"#48bbaf", backgroundImage:"linear-gradient(to bottom right, #48bbaf, whitesmoke)"}}>
                           
                           <p style={{fontWeight:"600"}}>Card type: {item.loanType}</p>
                           <p style={{fontWeight:"600"}}>Duration: {item.duration_in_year} months</p>
                           
                           <p onClick={()=>handleSelect(item.duration_in_year, item.loan_id)} style={{textDecoration: "underline",cursor:"pointer",marginRight:"0%", marginBottom:"0%", textAlign:"right"}}>Select</p>

               </div>                    
           ))}
           </div>
            
            <Footer/>
        </div>
    );

}

export default DisplayItemWiseCard;