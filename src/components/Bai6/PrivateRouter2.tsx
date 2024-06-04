import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter2: React.FC = () => {
  const isAuthenticated = localStorage.getItem('auth') === 'true';
  const role = localStorage.getItem('role');

  return isAuthenticated && (role === 'Admin' || role === 'User') ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRouter2;

