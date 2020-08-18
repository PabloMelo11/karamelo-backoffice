import React, { useEffect } from 'react';

import { Container } from './styles';

const Cart: React.FC = () => {
  useEffect(() => {
    console.log('acessou');
  }, []);

  return (
    <Container>
      <h1>Cart</h1>
    </Container>
  );
};

export default Cart;
