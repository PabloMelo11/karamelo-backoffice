import React, { useEffect } from 'react';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  useEffect(() => {
    console.log('acessou');
  }, []);

  return (
    <Container>
      <h1>Dashboard</h1>
    </Container>
  );
};

export default Dashboard;
