import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import LoginAsk from './component/LoginAsk';  
import AdminLogin from './component/AdminLogin';
import EmployeeLogin from './component/EmployeeLogin';
import AdminDashboard from './component/AdminDashboard';
import AddUserData from './component/AddUserData';
import ItemMasterAdd from './component/ItemMasterAdd';
import LoanCardAdd from './component/LoanCardAdd';
import UserDataTable from './component/UserDataTable';
import ItemMasterDataTable from './component/ItemMasterDataTable';
import LoanDataTable from './component/LoadDataTable';
import ViewLoanTable from './component/ViewLoanTable';
import EmployeeDashboard from './component/EmployeeDashboard';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<LoginAsk/>}/>
        <Route path="/adminLogin" element={<AdminLogin/>}/>
        <Route path="/employeeLogin" element={<EmployeeLogin/>}/>
        <Route path="/adminDashboard" element={<AdminDashboard/>}/>
        <Route path="/addUserData" element={<AddUserData/>}/>
        <Route path="/itemMasterAdd" element={<ItemMasterAdd/>}/>
        <Route path="/loanCardAdd" element={<LoanCardAdd/>}/>
        <Route path="/userDataTable" element={<UserDataTable/>}/>
        <Route path="/itemMasterDataTable" element={<ItemMasterDataTable/>}/>
        <Route path="/loanDataTable" element={<LoanDataTable/>}/>
        <Route path="/viewLoanTable" element={<ViewLoanTable/>}/>
        <Route path="/employeeDashboard" element={<EmployeeDashboard/>}/>
      </Routes>
    </Router>
   
  )
}

export default App;
