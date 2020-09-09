import React from 'react';
import { FaUser, FaUsers, FaBox } from 'react-icons/fa';

import {
  Container,
  Header,
  Content,
  ContentImage,
  NavigationCrud,
  MenuItem,
} from './styles';

import { IMainModalProps } from './Props';

const MainModal: React.FC<IMainModalProps> = ({
  title,
  subtitle,
  headerBackgroundColor,
  hasImage,
  children,
  headerStyle,
  containerStyles,
  isCrud,
}) => {
  return (
    <Container style={containerStyles}>
      {!hasImage && (
        <Header
          style={headerStyle}
          isCrud={isCrud}
          backgroundColor={headerBackgroundColor}
        >
          {title && <h4>{title}</h4>}
          {subtitle && <p>{subtitle}</p>}

          {isCrud && (
            <NavigationCrud>
              <MenuItem to="/general/users">
                <FaUser size={18} />
                <span>Usuários</span>
              </MenuItem>

              <MenuItem to="/general/customers">
                <FaUsers size={24} />
                <span>Clientes</span>
              </MenuItem>

              <MenuItem to="/general/products">
                <FaBox size={18} />
                <span>Produtos</span>
              </MenuItem>
            </NavigationCrud>
          )}
        </Header>
      )}

      {!hasImage && <Content>{children}</Content>}

      {hasImage && <ContentImage>{children}</ContentImage>}
    </Container>
  );
};

export default MainModal;
