import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { MdNotifications } from 'react-icons/md';

import { useAuth } from '../../hooks/auth';

import { Container, Left, Right } from './styles';

const Header: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Left>
        <span>Barra de pesquisa</span>
      </Left>

      <Right>
        <button type="button" title="Notificações">
          <MdNotifications size={22} />
        </button>

        <Link to="/me" title="Perfil">
          <img src={user.avatar_url} alt="Avatar" />
        </Link>
        <span>{`Olá, ${user.name}`}</span>
      </Right>
    </Container>
  );
};

export default memo(Header);
