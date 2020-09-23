import React, { memo, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Button from '../ButtonForm';

import logoImg from '../../assets/horizontalLogo.svg';

import { Container } from './styles';

const Header: React.FC = () => {
  const location = useLocation();

  const handleGetCurrentPage = useCallback(() => {
    const pathname = location.pathname.split('/');
    console.log(pathname);
    return pathname[2];
  }, [location.pathname]);

  return (
    <Container>
      <img src={logoImg} alt="Karamelo" />

      <div>
        {handleGetCurrentPage() === 'users' && <Button>Novo usuário</Button>}
      </div>
    </Container>
  );
};

export default memo(Header);
