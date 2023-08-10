import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import "./AdminLogin.css"; // Import your CSS file

const AdminLogin = () => {
  //   const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Replace with your API endpoint
    const apiUrl = "your_api_endpoint_here";

    // Replace with actual request payload structure
    const data = {
      username: username,
      password: password,
    };

    axios
      .post(apiUrl, data)
      .then((response) => {
        if (response.data.success) {
          // Redirect to the admin dashboard on successful login
          //   navigate.push("/dashboard");
        } else {
          alert("Login failed. Please check your credentials.");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        alert("An error occurred while logging in.");
      });
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <div className="login-box">
          <h1>Admin Login</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
