import React from 'react';
import { Navigate } from 'react-router-dom';
import AppAdm from '../Admin';
import Logout from '../../components/Logout';
import { Container } from './styles';


const ProtectedPage: React.FC = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" replace/>;
  }

  return (
    <Container>
        <header>
          <h3>Bem vindo ao sistema!</h3>
          <Logout/>
        </header>

        <AppAdm/>
    </Container>
  );
};

export default ProtectedPage;
