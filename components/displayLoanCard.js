import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function displayLoanCard(){
    const [data, setData] = useState([]);
    const location = useLocation();
    const issue_id = location.state.issue_id;
    const loan_type = location.state.loan_type;
    const employee_id = location.state.employee_id;

    return(
        <div>
            
        </div>
    );

}

export default displayLoanCard;