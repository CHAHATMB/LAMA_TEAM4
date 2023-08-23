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
import EmployeeRegistration from './component/EmployeeRegistration';
import ApplyLoan from './component/ApplyLoan';
import ViewMyLoans from './component/ViewMyLoans';
import ViewItemsPurchased from './component/ViewItemsPurchased';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        {/* <Route path="/viewLoanTable" element={<ViewLoanTable/>}/> */}
        <Route path="/employeeDashboard" element={<EmployeeDashboard/>}/>
        <Route path="/employeeRegistration" element={<EmployeeRegistration/>}/>
        <Route path="/applyLoan" element={<ApplyLoan/>}/>
        <Route path="/viewMyLoans" element={<ViewMyLoans/>}/>
        <Route path="/viewItemsPurchased" element={<ViewItemsPurchased/>}/>
        <ToastContainer />


      </Routes>
    </Router>
   
  )
}

export default App;
