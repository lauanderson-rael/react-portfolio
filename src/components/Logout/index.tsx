import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ImExit } from "react-icons/im";
import { useState } from "react";
import Modal from "../Modal";

const Container = styled.div`
  button {
    border-radius: 10px;
    border: none;
    background-color: #f80d0d;
    transition: all.2s;
    padding: 3px 10px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      box-shadow: 0px 0px 8px #f80d0d;
      transform: scale(1.03);
    }
  }
`;

const Logout: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const deslogar = () => {
    //const token = localStorage.getItem('token');
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Container>
      <button type="button" onClick={() => setIsModalOpen(true)}>
        {" "}
        <ImExit /> Sair
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => deslogar()}
        message={"Tem certeza que deseja sair?"}
      />
    </Container>
  );
};

export default Logout;
