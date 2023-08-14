import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import AdminLogin from './Components/AdminLogin';
import Header from './Components/Header';
import Footer from './Components/Footer';
import EmployeeLogin from './Components/EmployeeLogin';
import AdminDashboard from './Components/AdminDashboard';
function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<LoginAsk/>}/>
        <Route path="/adminLogin" element={<AdminLogin/>}/>
        <Route path="/employeeLogin" element={<EmployeeLogin/>}/>
        <Route path="/adminDashboard" element={<AdminDashboard/>}/>
      </Routes>
    </Router>
   
  )
}

export default App;
