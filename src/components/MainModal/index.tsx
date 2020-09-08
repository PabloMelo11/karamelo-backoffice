import React from 'react';

import { Container, Header, Content, ContentImage } from './styles';

import { IMainModalProps } from './Props';

const MainModal: React.FC<IMainModalProps> = ({
  title,
  subtitle,
  headerBackgroundColor,
  headerShadowColor,
  hasImage,
  children,
  headerStyle,
}) => {
  return (
    <Container>
      {!hasImage && (
        <Header
          backgroundColor={headerBackgroundColor}
          shadowColor={headerShadowColor}
          style={headerStyle}
        >
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </Header>
      )}

      {!hasImage && <Content>{children}</Content>}

      {hasImage && <ContentImage>{children}</ContentImage>}
    </Container>
  );
};

export default MainModal;
