import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/horizontalLogo.svg';

import { useAuth } from '../../hooks/auth';

import { Container, Left, Right } from './styles';

const Header: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Left>
        <span>Barra de pesquisa</span>
      </Left>

      <div>
        <img src={logoImg} alt="Karamelo" />
      </div>

      <Right>
        <span>{`Olá, ${user.name}`}</span>
        <Link to="/me" title="Perfil">
          <img src={user.avatar_url} alt="Avatar" />
        </Link>
      </Right>
    </Container>
  );
};

export default memo(Header);
