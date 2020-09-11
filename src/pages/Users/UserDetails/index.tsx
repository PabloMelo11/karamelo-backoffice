import React from 'react';

import General from '../../../components/General';
import MainModal from '../../../components/MainModal';

import { ContainerGrid } from './styles';

const UserDetails: React.FC = () => {
  return (
    <General>
      <ContainerGrid>
        <MainModal
          headerStyle={{ height: '64px', padding: '3px 15px' }}
          headerBackgroundColor="yellow"
          title="Pedidos"
          subtitle="Pedidos realizados"
        >
          1
        </MainModal>
        <MainModal
          headerStyle={{ height: '64px', padding: '3px 15px' }}
          headerBackgroundColor="green"
          title="Perfil"
          subtitle="Informações da conta"
        >
          2
        </MainModal>
        <MainModal
          headerStyle={{ height: '64px', padding: '3px 15px' }}
          headerBackgroundColor="blue"
          title="Produtos"
          subtitle="Produtos criados"
        >
          3
        </MainModal>
      </ContainerGrid>
    </General>
  );
};

export default UserDetails;
