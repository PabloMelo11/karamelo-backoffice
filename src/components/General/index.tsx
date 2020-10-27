import React from 'react';
import { FaUser, FaUsers, FaBox } from 'react-icons/fa';

import Button from '../ButtonForm';

import {
  Container,
  Header,
  Content,
  NavigationCrud,
  ContentItemsNavigation,
  MenuItem,
} from './styles';

import { IMainModalProps } from './Props';

const General: React.FC<IMainModalProps> = ({
  headerBackgroundColor,
  children,
  headerStyle,
  containerStyles,
  contentStyles,
  triggerDone,
}) => {
  return (
    <Container style={containerStyles}>
      <Header style={headerStyle} backgroundColor={headerBackgroundColor}>
        <NavigationCrud>
          <ContentItemsNavigation>
            <h2>Configurações</h2>

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
          </ContentItemsNavigation>

          <Button
            background="white"
            style={{ background: '#fff', color: '#000', opacity: 1 }}
            onClick={triggerDone}
          >
            Adicionar
          </Button>
        </NavigationCrud>
      </Header>
      <Content style={contentStyles}>{children}</Content>
    </Container>
  );
};

export default General;
