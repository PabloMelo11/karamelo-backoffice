import React from 'react';

import { Container, Header, Content, ContentImage } from './styles';

import { IMainModalProps } from './Props';

const MainModal: React.FC<IMainModalProps> = ({
  title,
  headerBackgroundColor,
  hasImage,
  children,
  headerStyle,
  containerStyles,
  contentStyles,
}) => {
  return (
    <Container style={containerStyles}>
      {!hasImage && (
        <Header style={headerStyle} backgroundColor={headerBackgroundColor}>
          {title && <h4>{title}</h4>}
        </Header>
      )}

      {!hasImage && <Content style={contentStyles}>{children}</Content>}

      {hasImage && <ContentImage>{children}</ContentImage>}
    </Container>
  );
};

export default MainModal;
