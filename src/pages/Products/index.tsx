import React, { useEffect } from 'react';

import { Container } from './styles';

const Products: React.FC = () => {
  useEffect(() => {
    console.log('acessou');
  }, []);

  return (
    <Container>
      <span>Products</span>
    </Container>
  );
};

export default Products;
