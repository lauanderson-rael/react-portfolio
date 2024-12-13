import React from 'react';
import { Navigate } from 'react-router-dom';
import AppAdm from '../Admin';
import Logout from '../../components/Logout';

const ProtectedPage: React.FC = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    // Se não estiver autenticado, redireciona para o login novamente
    return <Navigate to="/login" replace/>;
  }

  return (
    <div style={{color: '#00ff08', background: 'var(--background-color)', paddingTop: '25px'}}>
      <div style={{display: 'flex'}}>
        <p style={{fontWeight: '700'}}> Página protegida: Você está autenticado!</p>

        <Logout/>
 
      </div>
      <AppAdm/>
    </div>
  );
};

export default ProtectedPage;
