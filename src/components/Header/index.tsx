import React from 'react';

import logoImg from '../../assets/horizontalLogo.svg';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="Karamelo" />
    </Container>
  );
};

export default Header;
