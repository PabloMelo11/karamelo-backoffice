import React, { useEffect } from 'react';

import { Container } from './styles';

const Panels: React.FC = () => {
  useEffect(() => {
    console.log('acessou');
  }, []);

  return (
    <Container>
      <h1>Panels</h1>
    </Container>
  );
};

export default Panels;
