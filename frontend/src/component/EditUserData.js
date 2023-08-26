import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './AddUserData.css'; // Import your CSS file
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const EditUserData = () => {
    const location = useLocation();
  const [employeeId, setEmployeeId] = useState(location.state.id);
  const [designation, setDesignation] = useState(location.state.designation);
  const [employeeName, setEmployeeName] = useState(location.state.name);
  const [dob, setDob] = useState(location.state.date_of_birth);
  const [department, setDepartment] = useState(location.state.department);
  const [doj, setDoj] = useState(location.state.date_of_join);
  const [gender, setGender] = useState(location.state.gender);
  const [email, setEmail] = useState(location.state.email);
  const [data, setData] = useState([]);
  let navigate = useNavigate();
  
  
  const minDate = new Date();
  const today = new Date().toISOString().split('T')[0];
  minDate.setFullYear(minDate.getFullYear() - 21);
  // today.setFullYear(today.getFullYear());
  const minDateStr = minDate.toISOString().split('T')[0];
  // const  = minDate.toISOString().split('T')[0];

  const handleDobChange = (e) => {
    const selectedDate = e.target.value;
    
    if (selectedDate <= minDateStr) {
      // setDob(selectedDate);
      setDob(e.target.value)
    } else {
      // Handle invalid date here, e.g., show an error message
      console.log('Invalid date selected');
    }

    setDoj('');
  };

  
const handleDojChange = (e) => {


  const selectedDate = e.target.value;
  if(dob==""){
    if (selectedDate<= today) {
      setDoj(selectedDate);
    } else {
      // Handle invalid date here, e.g., show an error message
      console.log('Invalid date selected for Date of Joining');
    }
  }
  else {
    const eighteenYearsAfterDob = new Date(dob);
    eighteenYearsAfterDob.setFullYear(eighteenYearsAfterDob.getFullYear() + 18);

    if (selectedDate >= eighteenYearsAfterDob.toISOString().split('T')[0] && selectedDate<= today) {
      setDoj(selectedDate);
    } else {
      // Handle invalid date here, e.g., show an error message
      console.log('Invalid date selected for Date of Joining');
    }
  }
};


  const handleEdit = () => {
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
      url: 'http://172.20.0.54:8080/api/employee/edit/'.concat(location.state.id).toString(),
      data:{
        employeeId:employeeId,
        email: email,
        designation:designation,
        employeeName:employeeName,
        date_of_birth: dob,
        department: department,
        date_of_join: doj,
        gender: gender,
      } ,
    }).then((data)=>{
        console.log(data);
        
       //add a popup
       // alert("Employee Updated Successfully");
        //   //clear the form
        //   setEmployeeId('');
        //   setDesignation('');
        //   setEmployeeName('');
        //   setDob('');
        //   setDepartment('');
        //   setDoj('');
        //   setGender('');
        //   setEmail('');
      //navigate to thetable page
          
    })
    console.log("Submit")
    navigate('/userDataTable');
  };

  return (
    <div>
      
      <div className="containerForm">
        <h2 className="form-title">Edit employee details</h2>
        <form>
          <label className="form-label">Employee ID:</label>
          <input
            type="text"
            value=  {location.state.id}
            onChange={(e) => setEmployeeId(e.target.value)}
            disabled
          />

          <label className="form-label">Designation:</label>
          <select
            defaultValue={location.state.designation}
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
            value={location.state.name}
            onChange={(e) => setEmployeeName(e.target.value)}
            required
          />

        <label className="form-label">Employee Email:</label>
                <input
                    type="email"
                    defaultValue={location.state.email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
          <label className="form-label">Date of Birth:</label>
          <input
            type="date"
            defaultValue={location.state.date_of_birth}
            onChange={handleDobChange}
            max={minDateStr}
            required
          />

          <label className="form-label">Department:</label>
          <select
            defaultValue={location.state.department}
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
            defaultValue={location.state.date_of_join}
            onChange={handleDojChange}
            min={dob}
            max = {today}
             required
          />

          <label className="form-label">Gender:</label>
          <select
            defaultValue={location.state.gender}
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

          {/* <label className="form-label">Gender:</label>
          <div className="radio-group">
            <input
              type="radio"
              id="male"
              name="gender"
              value="Male"
              checked={gender === 'Male'}
              onChange={(e) => setGender(e.target.value)}
              required
            />
            <label htmlFor="male">Male</label>

            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              checked={gender === 'Female'}
              onChange={(e) => setGender(e.target.value)}
              required
            />
            <label htmlFor="female">Female</label> 
          </div>*/}

          <button className="form-button" type="submit" onClick={handleEdit}>Submit</button>
        </form>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default EditUserData;