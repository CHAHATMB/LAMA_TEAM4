import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './AddUserData.css'; // Import your CSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddUserData = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [designation, setDesignation] = useState('Manager');
  const [employeeName, setEmployeeName] = useState('');
  const [dob, setDob] = useState('');
  const [department, setDepartment] = useState('HR');
  const [doj, setDoj] = useState('');
  const [gender, setGender] = useState(1);
  const [email, setEmail] = useState('');
  const [data, setData] = useState([]);
  const [role, setRole] = useState(0);
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', {
      employeeId,
      designation,
      employeeName,
      dob,
      department,
      doj,
      gender,
    });

    axios({
      method: 'POST',
      url: 'http://172.20.0.54:8080/api/employee/add',
      data:{
        employeeId:employeeId,
        email: email,
        designation:designation,
        employeeName:employeeName,
        date_of_birth: dob,
        department: department,
        date_of_join: doj,
        gender: gender,
        role: role
      } ,
    }).then((data)=>{
        //toast.done("Added successfully");
        setTimeout(() => {
          navigate('/userDataTable');
        },1000);

    }).catch((error) =>{
        console.log(error);
        toast.error("Bad Credential! Please Try Again!");
    })
    console.log("Submit")
   
  };

  return (
    <div>
      <ToastContainer/>
      <div className="containerForm">
        <h2 className="form-title">Employee Form</h2>
        <form onSubmit={handleSubmit}>
          <label className="form-label">Employee ID:</label>
          <input
            type="text"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            required
          />

          <label className="form-label">Designation:</label>
          <select
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            required
          >
            {/* <option value="">Select Designation</option> */}
            <option value="Manager">Manager</option>
            <option value="Executive">Executive</option>
            <option value="Sr Executive">Sr Executive</option>
            <option value="Clerk">Clerk</option>
            {/* Add more designations as needed */}
          </select>

          <label className="form-label">Employee Name:</label>
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            required
          />

<label className="form-label">Employee Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="form-label">Date of Birth:</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />

          <label className="form-label">Department:</label>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          >
            {/* <option value="">Select Department</option> */}
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="Sales">Sales</option>
            {/* Add more departments as needed */}
          </select>

          <label className="form-label">Date of Joining:</label>
          <input
            type="date"
            value={doj}
            onChange={(e) => setDoj(e.target.value)}
            required
          />

          <label className="form-label">Gender:</label>
          <select
            value={gender}
            required
            onChange={(e) => {
              if(e.target.value === 'Female'){
                setGender(1);
              }
              else{
                setGender(0);
              }}
            }
          
          >
            {/* <option value="">Select Gender</option> */}
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <label className="form-label">Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            {/* <option value="">Select Department</option> */}
            <option value={0}>User</option>
            <option value={1}>Admin</option>
          </select>

          <button className="form-button" type="submit">Submit</button>
        </form>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AddUserData;