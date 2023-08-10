import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import your CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">Home{/* <Link to="/">Home</Link> */}</li>
        <li className="nav-item">
          Admin{/* <Link to="/admin">Admin</Link> */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
