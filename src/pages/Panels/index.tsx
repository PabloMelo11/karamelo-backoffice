import React, { useEffect } from 'react';

import { Container } from './styles';

const Panels: React.FC = () => {
  useEffect(() => {
    console.log('acessou');
  }, []);

  return (
    <Container>
      <span>Panels</span>
    </Container>
  );
};

export default Panels;
