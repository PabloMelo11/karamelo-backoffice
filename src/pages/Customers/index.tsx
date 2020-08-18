import React, { useEffect } from 'react';

import { Container } from './styles';

const Customers: React.FC = () => {
  useEffect(() => {
    console.log('acessou');
  }, []);

  return (
    <Container>
      <h1>Customers</h1>
    </Container>
  );
};

export default Customers;
