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
import LoanDataTable from './component/LoanDataTable';
// import ViewLoanTable from './component/ViewLoanTable';
import EmployeeDashboard from './component/EmployeeDashboard';
import ApplyLoan from './component/ApplyLoan';
import ViewMyLoans from './component/ViewMyLoans';
import ViewItemsPurchased from './component/ViewItemsPurchased';
import EditUserData from './component/EditUserData';
import LoanCardEdit from './component/LoanCardEdit';
import About from './component/About';
import ApproveLoan from './component/ApproveLoan';
import DisplayItemWiseCard from './component/DisplayItemWiseCard';
import { useState } from 'react';

function App() {
  // const [loanType, setLoanType] = useState("");
  // const [duration, setDuration] = useState("");
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
        {/* <Route path="/viewLoanTable" element={<ViewLoanTable/>}/> */}
        <Route path="/employeeDashboard" element={<EmployeeDashboard/>}/>
        <Route path="/applyLoan" element={<ApplyLoan/>}/>
        <Route path="/viewMyLoans" element={<ViewMyLoans/>}/>
        <Route path="/viewItemsPurchased" element={<ViewItemsPurchased/>}/>
        <Route path="/editUserData" element={<EditUserData/>}/>
        <Route path="/editLoanCard" element={<LoanCardEdit/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/approveLoan" element={<ApproveLoan/>}/>
        <Route path="/displayItemWiseCard" element={<DisplayItemWiseCard/>}/>
      </Routes>
    </Router>
   
  )
}

export default App;