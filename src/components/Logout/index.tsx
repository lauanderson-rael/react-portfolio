import { useNavigate } from 'react-router-dom';

const Logout: React.FC = () => {
    const navigate = useNavigate();
    const deslogar = ()=>{
        //const token = localStorage.getItem('token');
        localStorage.removeItem('token')
        navigate('/login');
    }

  return (
      <button type="button" onClick={deslogar} style={{background: 'red', color: 'var(--text-color2)', padding: '2px 5px'}}>Logout</button>
  );
};

export default Logout;
