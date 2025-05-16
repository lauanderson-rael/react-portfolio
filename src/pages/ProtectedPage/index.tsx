import React from 'react';
import { Navigate } from 'react-router-dom';
import AppAdm from '../Admin';

const ProtectedPage: React.FC = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" replace/>;
  }
  return (
    <AppAdm/>
  );
};

export default ProtectedPage;
