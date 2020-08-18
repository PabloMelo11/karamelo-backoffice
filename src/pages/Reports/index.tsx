import React, { useEffect } from 'react';

import { Container } from './styles';

const Reports: React.FC = () => {
  useEffect(() => {
    console.log('acessou');
  }, []);

  return (
    <Container>
      <h1>Reports</h1>
    </Container>
  );
};

export default Reports;
