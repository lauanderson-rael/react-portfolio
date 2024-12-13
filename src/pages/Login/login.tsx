import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './styles';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token); // Armazena o token JWT
        navigate('/protected'); // Redireciona para a página protegida
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Login falhou.');
      }
    } catch (err) {
      console.error('Erro de conexão:', err);
      setError('Erro de conexão com o servidor.');
    }
  };

  return (
    <Container>
    <form onSubmit={handleSubmit}>
      <label>username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <br />
      <label>Senha:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Entrar</button>
    </form>
    </Container>
  );
};

export default Login;
