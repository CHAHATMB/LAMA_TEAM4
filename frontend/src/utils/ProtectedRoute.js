import React from 'react';
import {Navigate} from 'react-router-dom';

const ProtectedRoute = ({ element: Component, auth, role, allowedRole, ...rest}) => {
 if (auth && role === allowedRole){
  return <Component {...rest}/>;
 }
 else {
  alert("Unauthoried login");
  return <Navigate to="/" />;
 }
}

export default ProtectedRoute