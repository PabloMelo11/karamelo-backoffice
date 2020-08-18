import React, { useEffect } from 'react';

import { Container } from './styles';

const Users: React.FC = () => {
  useEffect(() => {
    console.log('acessou');
  }, []);

  return (
    <Container>
      <h1>Users</h1>
    </Container>
  );
};

export default Users;
