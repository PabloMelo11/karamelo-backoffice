import React, { useEffect } from 'react';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  useEffect(() => {
    console.log('acessou');
  }, []);

  return (
    <Container>
      <span>Dashboard</span>
    </Container>
  );
};

export default Dashboard;
