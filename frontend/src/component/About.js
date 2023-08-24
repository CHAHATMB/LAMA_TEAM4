import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function About (){
    return(
        <>
        <Header/>
        <h1 style={{fontStyle:"bold", fontWeight:"700",marginTop:"7%" ,marginLeft:"7%", color:"#48b4bb"}}>Personal</h1>
       <h1 style={{fontStyle:"bold", fontWeight:"700", marginLeft:"7%", color:"#48b4bb"}}>Loan</h1>
        <Footer/>       
       </>

    );
   
   
}

export default About