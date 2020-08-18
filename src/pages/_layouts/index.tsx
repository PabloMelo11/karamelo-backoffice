import React from 'react';

import { Container, Content, Wrapper, WrapperContent } from './styles';

import Menu from '../../components/Menu';

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <Menu />
      <Content>
        <Wrapper>
          <WrapperContent>{children}</WrapperContent>
        </Wrapper>
      </Content>
    </Container>
  );
};

export default DefaultLayout;
