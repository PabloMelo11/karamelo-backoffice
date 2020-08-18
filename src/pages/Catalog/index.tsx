import React, { useEffect } from 'react';

import { Container } from './styles';

const Catalog: React.FC = () => {
  useEffect(() => {
    console.log('acessou');
  }, []);

  return (
    <Container>
      <h1>Catalog</h1>
    </Container>
  );
};

export default Catalog;
