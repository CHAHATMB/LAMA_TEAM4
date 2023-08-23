import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function selectLoanCard(){

    function handleSelect(){

    }
    return(
        <div>
            <Header/>
            <div style={{marginLeft:"3%",paddingTop:"2%",paddingLeft:"0.5%", paddingRight:"0.5%", paddingBottom:"2%", width:"20%", marginTop:"5%", backgroundColor:"#48bbaf", backgroundImage:"linear-gradient(to bottom right, #48bbaf, whitesmoke)"}}>
               
                <p>Loan type</p>
                <p>Duration</p>
               
                <p onClick={handleSelect} style={{textDecoration: "underline",cursor:"pointer",marginRight:"0%", marginBottom:"0%", textAlign:"right"}}>Select</p>

            </div>
            <Footer/>
        </div>

    );

}

export default selectLoanCard;