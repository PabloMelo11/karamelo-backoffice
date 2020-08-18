import React, { useEffect } from 'react';

import { Container } from './styles';

const Reports: React.FC = () => {
  useEffect(() => {
    console.log('acessou');
  }, []);

  return (
    <Container>
      <span>Reports</span>
    </Container>
  );
};

export default Reports;
