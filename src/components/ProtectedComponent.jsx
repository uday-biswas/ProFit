import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedComponent = ({ isLoggedIn, children }) => (isLoggedIn ? children : <Navigate to="/login" />);


export default ProtectedComponent;
