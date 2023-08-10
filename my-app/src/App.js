import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";

const App = () => {
  return (
    <div>
      <AdminLogin />
    </div>
  );
};

export default App;
