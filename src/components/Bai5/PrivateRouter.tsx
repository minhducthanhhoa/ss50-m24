import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter: React.FC = () => {
  const isAuthenticated = localStorage.getItem('auth') === 'true';

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
