import React from 'react';
import './About.css'; // Make sure to style your components accordingly
import about from "../images/about1.jpg";
import Footer from './Footer';

const About = () => {
  return (
    <div className="about-page-container">
      <div className="header-image">
        <img src={about} alt="Loan Management System" />
        <div className="image-overlay">
          <h1 style={{backgroundColor:"whitesmoke"}}>Welcome to Our Loan Management System</h1>
          <p style={{backgroundColor:"whitesmoke"}}>Your Dreams, Your Loans, Your Way</p>
        </div>
      </div>
      <div className="content-container">
        <div className="loan-cards">
          <div className="loan-card">
            <h3>Furniture Loans</h3>
            <p>Turn your home-decor dreams into reality with our furniture loan options.</p>
          </div>
          <div className="loan-card">
            <h3>Electronics Loans</h3>
            <p>Fuel your business growth with our tailored electronics loan solutions.</p>
          </div>
          <div className="loan-card">
            <h3>Crockery Loans</h3>
            <p>Invest in your kitchen with our crockery loan offerings.</p>
          </div>
          <div className="loan-card">
            <h3>Stationery Loans</h3>
            <p>Navigate life's uncertainties and opportunities with our flexible personal loans.</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;