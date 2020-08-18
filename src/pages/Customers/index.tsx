import React, { useEffect } from 'react';

import { Container } from './styles';

const Customers: React.FC = () => {
  useEffect(() => {
    console.log('acessou');
  }, []);

  return (
    <Container>
      <span>Customers</span>
    </Container>
  );
};

export default Customers;
