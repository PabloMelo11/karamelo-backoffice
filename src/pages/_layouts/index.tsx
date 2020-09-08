import React from 'react';

import { Container, Content, Wrapper } from './styles';

import Menu from '../../components/Menu';
import Header from '../../components/Header';

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <Menu />
      <Content>
        <Header />
        <Wrapper>{children}</Wrapper>
      </Content>
    </Container>
  );
};

export default DefaultLayout;
