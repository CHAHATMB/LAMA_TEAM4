import React from 'react';
import Table from 'react-bootstrap/Table';
import Header from './Header';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import male from '../images/male.png';
import female from '../images/female.png';

function ViewItemTable() {
    const[data, setData] = useState([]);
        const location = useLocation();
    const name = location.state.name;
    const designation = location.state.designation;
    const department = location.state.department;
    const gender = location.state.gender;

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('http://172.20.0.54:8080/api/item/myitem/'.concat(location.state.id).toString());
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
//   const dummyLoanData = [
//     {
//       id: 1,
//       loanId: 'L001',
//       loanType: 'Personal Loan',
//       duration: 5,
//     },
//     {
//       id: 2,
//       loanId: 'L002',
//       loanType: 'Home Loan',
//       duration: 15,
//     },
//     // Add more dummy loan data entries here
//   ];

  return (
    <div>

       <div style={{display:"flex", flexWrap:"wrap"}}>
       {gender===1?
        <img src = {female} style={{marginLeft:"5%", marginTop:"1.2%"}}/>:
        <img src = {male} style={{marginLeft:"5%", marginTop:"1.2%"}}/>
      }
      <div style={{marginTop:"2%"}}>
      <h4 >{name}</h4>
      <h5 style={{fontStyle:"italic"}}>{designation}, {department}</h5>
      </div>
      <h4 style={{textAlign:"center", backgroundColor:"#ffc40c", color:"white",fontStyle:"bold", fontWeight:"700",width:"100%", marginTop:"1%", padding:"0.5%"}}>Items Purchased</h4>

      

      </div>
      
      <div style={{ marginTop: '20px', padding: '0 20px' }}>
        <Table striped bordered responsive className="table-striped-dark">
          <thead>
            <tr>
              <th>Issue ID</th>
              <th>Item description</th>
              <th>Item make</th>
              <th>Item category</th>
              <th>Item valuation</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.issue_id}</td>
                <td>{item.item_description}</td>
                <td>{item.item_make}</td>
                <td>{item.item_category}</td>
                <td>{item.item_valuation}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ViewItemTable;


// import React from 'react';
// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
// import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
// //import './LoanDataTable.css'; // Import the CSS file
// import Header from './Header';
// import axios from 'axios';
// import { useEffect,useState } from 'react';
// import { RiEdit2Fill, RiDeleteBinLine} from 'react-icons/ri';

// import { useLocation } from 'react-router-dom';

// function ViewItemsPurchased() {
//     const[data, setData] = useState([]);
//     const location = useLocation();
//     const name = location.state.name;
//     const designation = location.state.designation;
//     const department = location.state.department;
//     const gender = location.state.gender;
//     useEffect(() => {
//       fetchData();
//     }, []);
  
//     const fetchData = async () => {
//     //   try {
//     //     const response = await axios.get('http://172.20.0.54:8080/api/loancard/all');
//     //     setData(response.data);
//     //     console.log(response.data);
//     //   } catch (error) {
//     //     console.error('Error fetching data:', error);
//     //   }
//     };
// //   const dummyLoanData = [
// //     {
// //       id: 1,
// //       loanId: 'L001',
// //       loanType: 'Personal Loan',
// //       duration: 5,
// //     },
// //     {
// //       id: 2,
// //       loanId: 'L002',
// //       loanType: 'Home Loan',
// //       duration: 15,
// //     },
// //     // Add more dummy loan data entries here
// //   ];

//   return (
//     <div>
    
//       {/* {data.map((item) => (

//       ))} */}
//       <div style={{display:"flex", flexWrap:"wrap"}}>
//       {gender===1?
//         <img src = {female} style={{marginLeft:"5%", marginTop:"1.2%"}}/>:
//         <img src = {male} style={{marginLeft:"5%", marginTop:"1.2%"}}/>
//       }
//       <div style={{marginTop:"2%"}}>
//       <h4 >{name}</h4>
//       <h5 style={{fontStyle:"italic"}}>{designation}, {department}</h5>
//       </div>
      

//       </div>

//       <h4 style={{textAlign:"center", backgroundColor:"#ffc40c", color:"white",fontStyle:"bold", fontWeight:"700",width:"100%", marginTop:"1%", padding:"0.5%"}}>Items Purchased</h4>
//       <div style={{ marginTop: '20px', padding: '0 20px' }}>
//         <Table striped bordered responsive className="table-striped-dark">
//           <thead>
//             <tr>
//               <th>Loan ID</th>
//               <th>Loan Type</th>
//               <th>Duration (Years)</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item) => (
//               item.loan_id === null? <h4>No loan cards issued! </h4>:(
//               <tr key={item.id}>
//                 <td>{item.loan_id}</td>
//                 <td>{item.loanType}</td>
//                 <td>{item.duration_in_year}</td>
//                 <td>
//                 <RiEdit2Fill style={{color:"#48b4bb"}}/>
//                     <RiDeleteBinLine style={{color:"red", marginLeft:"16%"}} /> 
//                 </td>
//               </tr>
//               )
//             ))}
//           </tbody>
//         </Table>
//       </div>
//     </div>
//   );
// }

// export default ViewItemsPurchased;