import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './AddUserData.css'; // Import your CSS file

const AddUserData = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [designation, setDesignation] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [dob, setDob] = useState('');
  const [department, setDepartment] = useState('');
  const [doj, setDoj] = useState('');
  const [gender, setGender] = useState('');

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
            onChange={(e) => setGender(e.target.value)}
            required
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
      <Footer />
    </div>
  );
};

export default AddUserData;
