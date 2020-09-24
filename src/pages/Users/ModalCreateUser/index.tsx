import React from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';

import { Container, Header } from './styles';

interface ModalCreateUserProps {
  isVisible: boolean;
  triggerClose(): void;
}

const customStyles = {
  overlay: {
    backgroundColor: '#00000050',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    padding: '0',
    border: '0',
    transform: 'translate(-50%, -50%)',
    width: '400px',
  },
};

const ModalCreateUser: React.FC<ModalCreateUserProps> = ({
  isVisible = false,
  triggerClose = () => {},
}) => {
  return (
    <Container>
      <Modal
        isOpen={isVisible}
        style={customStyles}
        closeTimeoutMS={500}
        shouldCloseOnEsc
      >
        <Header>
          <span>Novo usuário</span>
          <button type="button" onClick={() => triggerClose()}>
            <AiOutlineClose size={28} />
          </button>
        </Header>
      </Modal>
    </Container>
  );
};

export default ModalCreateUser;
