import React, { useEffect } from 'react';

import { Container } from './styles';

const Catalog: React.FC = () => {
  useEffect(() => {
    console.log('acessou');
  }, []);

  return (
    <Container>
      <span>Catalog</span>
    </Container>
  );
};

export default Catalog;
