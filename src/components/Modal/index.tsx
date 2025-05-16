import React from 'react';
import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message?: string;
}

const ModalBackdrop = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: var(--background-color2);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  text-align: center;
`;

const ModalMessage = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  color: var(--text-color2);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
`;

const Button = styled.div<{ variant?: 'confirm' | 'cancel' }>`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ variant }) => (variant === 'confirm' ? '#f00' : '#ccc')};
  color: var(--text-color2);
  font-weight: bold;

  &:hover {
    opacity: 0.9;
  }
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm, message }) => {
  return (
    <ModalBackdrop isOpen={isOpen}>
      <ModalContent>
        <ModalMessage>{message || 'Você tem certeza que deseja deletar este item?'}</ModalMessage>
        <ButtonGroup>
          <Button variant="cancel" onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="confirm" onClick={onConfirm}>
            Confirmar
          </Button>
        </ButtonGroup>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default Modal;
