import React from 'react';

import { Container, Header, Content } from './styles';

import { IMainModalProps } from './Props';

const MainModal: React.FC<IMainModalProps> = ({
  title,
  subtitle,
  headerBackgroundColor,
  headerShadowColor,
  children,
}) => {
  return (
    <Container>
      <Header
        backgroundColor={headerBackgroundColor}
        shadowColor={headerShadowColor}
      >
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
};

export default MainModal;
