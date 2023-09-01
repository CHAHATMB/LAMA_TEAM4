import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function displayLoanCard(){
    const [data, setData] = useState([]);
    const location = useLocation();
    const issue_id = location.state.issue_id;
    const loan_type = location.state.loan_type;
    const employee_id = location.state.employee_id;

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async() =>{
        try {
            const response = await axios.get('http://172.20.0.54:8080/api/loancard/itemtype/'.concat(loan_type).toString());
            setData(response.data);
            console.log(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    };
    return(

        <div>
            
        </div>
    );

}

export default DisplayLoanCard;