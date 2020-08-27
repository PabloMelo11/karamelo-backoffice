import React, { useEffect } from 'react';

import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
  useEffect(() => {
    console.log('acessou');
  }, []);

  return (
    <Container>
      <Content>
        <div>Teste 1</div>
        <div>Teste 2</div>
        <div>Teste 2</div>
        <div>Teste 2</div>
        <div>Teste 2</div>
        <div>Teste 2</div>
        <div>Teste 2</div>
        <div>Teste 2</div>
        <div>Teste 2</div>
        <div>Teste 2</div>
        <div>Teste 2</div>
        <div>Teste 2</div>
        <div>Teste 2</div>
        <div>Teste 2</div>
        <div>Teste 2</div>
        <div>Teste 2</div>
      </Content>
    </Container>
  );
};

export default Dashboard;
