  import React, { useState } from 'react';
  import Header from './Header';
  import Footer from './Footer';
  import './AddUserData.css'; // Import your CSS file
  import axios from 'axios';
  import { useNavigate } from 'react-router-dom';

  const AddUserData = () => {
    const [employeeId, setEmployeeId] = useState('');
    const [designation, setDesignation] = useState('');
    const [employeeName, setEmployeeName] = useState('');
    const [dob, setDob] = useState('');
    const [department, setDepartment] = useState('');
    const [doj, setDoj] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
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
        } ,
      }).then((data)=>{
          console.log(data);
      })
      console.log("Submit")
    
    };

    return (
      <div>
        <Header />
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
              onChange={handleDobChange}
              max={minDateStr}
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
              onChange={handleDojChange}
              min={dob}
              max = {today}
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

            <button className="form-button" type="submit">Submit</button>
          </form>
        </div>
        {/* <Footer /> */}
      </div>
    );
  };

  export default AddUserData;
