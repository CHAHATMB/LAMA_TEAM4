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
import { useState } from 'react';
import Header from './component/Header';
import ApproveLoan from './component/ApproveLoan';
import LoanCardEdit from './component/LoanCardEdit';
import DisplayItemWiseCard from './component/DisplayItemWiseCard';
import EditUserData from './component/EditUserData';
import About from './component/About';
import ProtectedRoute from './utils/ProtectedRoute';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken ] = useState('');
  const [userRoles, setUserRoles ] = useState('');

  const handleLogin = (newToken, role) => {
    setToken(newToken);
    setIsAuthenticated(true);
    setUserRoles(role);
  }

  const handleLogout = () => {
    setToken('');
    setIsAuthenticated(false);
    setUserRoles('');
  };
  
  return(
    <Router>
      <div>

      <Header
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
        />
      <Routes>
        <Route path="/" element={<LoginAsk/>}/>
        <Route path="/adminLogin" element={<AdminLogin onLogin={handleLogin}/>}/>
        <Route path="/employeeLogin" element={<EmployeeLogin onLogin={handleLogin}/>}/>

        {/* Use protected Route component */}
        <Route path="/adminDashboard" 
          element={
            <ProtectedRoute 
              auth={isAuthenticated}
              role={userRoles}
              allowedRole="ADMIN"
              element={AdminDashboard}
            />
          }
        />
        <Route path="/addUserData" 
          element={
            <ProtectedRoute 
              auth={isAuthenticated}
              role={userRoles}
              allowedRole="ADMIN"
              element={AddUserData}
            />
          }
        />
        <Route path="/itemMasterAdd" 
          element={
            <ProtectedRoute 
              auth={isAuthenticated}
              role={userRoles}
              allowedRole="ADMIN"
              element={ItemMasterAdd}
            />
          }
        />
        <Route path="/loanCardAdd" 
          element={
            <ProtectedRoute 
              auth={isAuthenticated}
              role={userRoles}
              allowedRole="ADMIN"
              element={LoanCardAdd}
            />
          }
        />
        <Route path="/userDataTable" 
          element={
            <ProtectedRoute 
              auth={isAuthenticated}
              role={userRoles}
              allowedRole="ADMIN"
              element={UserDataTable}
            />
          }
        />
        <Route path="/itemMasterDataTable" 
          element={
            <ProtectedRoute 
              auth={isAuthenticated}
              role={userRoles}
              allowedRole="ADMIN"
              element={ItemMasterDataTable}
            />
          }
        />
        <Route path="/loanDataTable" 
          element={
            <ProtectedRoute 
              auth={isAuthenticated}
              role={userRoles}
              allowedRole="ADMIN"
              element={LoanDataTable}
            />
          }
        />

        <Route path="/employeeDashboard" 
          element={
            <ProtectedRoute 
            auth={isAuthenticated}
            role={userRoles}
            allowedRole="USER"
            element={EmployeeDashboard}
            />
          }
        />
        <Route path="/employeeRegistration" 
          element={
            <ProtectedRoute 
            auth={isAuthenticated}
            role={userRoles}
            allowedRole="USER"
            element={EmployeeRegistration}
            />
          }
        />
        <Route path="/applyLoan" 
          element={
            <ProtectedRoute 
            auth={isAuthenticated}
            role={userRoles}
            allowedRole="USER"
            element={ApplyLoan}
            />
          }
        />
        <Route path="/viewMyLoans" 
          element={
            <ProtectedRoute 
            auth={isAuthenticated}
            role={userRoles}
            allowedRole="USER"
            element={ViewMyLoans}
            />
          }
        />
        <Route path="/viewItemsPurchased" 
          element={
            <ProtectedRoute 
            auth={isAuthenticated}
            role={userRoles}
            allowedRole="USER"
            element={ViewItemsPurchased}
            />
          }
        />
        <Route path="/approveLoan" 
          element={
            <ProtectedRoute 
            auth={isAuthenticated}
            role={userRoles}
            allowedRole="ADMIN"
            element={ApproveLoan}
            />
          }
        />
        <Route path="/editLoanCard" 
          element={
            <ProtectedRoute 
              auth={isAuthenticated}
              role={userRoles}
              allowedRole="ADMIN"
              element={LoanCardEdit}
            />
          }
        />
        <Route path="/displayItemWiseCard" 
          element={
            <ProtectedRoute 
              auth={isAuthenticated}
              role={userRoles}
              allowedRole="ADMIN"
              element={DisplayItemWiseCard}
            />
          }
        />
        <Route path="/editUserData" 
          element={
            <ProtectedRoute 
              auth={isAuthenticated}
              role={userRoles}
              allowedRole="ADMIN"
              element={EditUserData}
            />
          }
        />
        <Route path="/about" element={<About/>}/>
        <Route path="/editItemData" element={<EditItemData/>}/>



      </Routes>
      </div>
    </Router>

   
  )
}

export default App;
