import React, { useEffect } from 'react';

import { Container } from './styles';

const Users: React.FC = () => {
  useEffect(() => {
    console.log('acessou');
  }, []);

  return (
    <Container>
      <span>Users</span>
    </Container>
  );
};

export default Users;
