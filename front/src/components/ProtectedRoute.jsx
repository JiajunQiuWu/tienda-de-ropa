import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ allowedRole, children }) => {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/login" />;
  if (user.role !== allowedRole) return <Navigate to="/" />;

  return children;
};

export default ProtectedRoute;
