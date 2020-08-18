import React, { useEffect } from 'react';

import { Container } from './styles';

const Cart: React.FC = () => {
  useEffect(() => {
    console.log('acessou');
  }, []);

  return (
    <Container>
      <span>Cart</span>
    </Container>
  );
};

export default Cart;
