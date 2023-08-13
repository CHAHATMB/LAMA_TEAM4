import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLogin from './Components/AdminLogin';
import Header from './Components/Header';
import Footer from './Components/Footer';
import EmployeeLogin from './Components/EmployeeLogin';
import AdminDashboard from './Components/AdminDashboard';
function App() {
  return (
    <>
    <Header/>
    {/* <AdminDashboard/> */}
    <AdminLogin/>
    {/* <EmployeeLogin/> */}
    <Footer/>
    </>
    
  );
}

export default App;
