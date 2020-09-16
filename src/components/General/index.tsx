import React from 'react';
import { FaUser, FaUsers, FaBox } from 'react-icons/fa';

import { Container, Header, Content, NavigationCrud, MenuItem } from './styles';

import { IMainModalProps } from './Props';

const General: React.FC<IMainModalProps> = ({
  headerBackgroundColor,
  children,
  headerStyle,
  containerStyles,
  contentStyles,
}) => {
  return (
    <Container style={containerStyles}>
      <Header style={headerStyle} backgroundColor={headerBackgroundColor}>
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
      </Header>
      <Content style={contentStyles}>{children}</Content>
    </Container>
  );
};

export default General;
