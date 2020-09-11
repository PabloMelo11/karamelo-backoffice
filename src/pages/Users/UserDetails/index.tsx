import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import api from '../../../services/api';

import General from '../../../components/General';
import MainModal from '../../../components/MainModal';

import { ContainerGrid } from './styles';

interface IUserProps {
  id: number;
  name: string;
  email: string;
  status: string;
  avatar_url: string;
  orders: Array<object>;
  products: Array<object>;
  categories: Array<object>;
}

const UserDetails: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const userIDLocation = location.pathname
      .replace('/general/', '')
      .replace('/users', '');

    const userID = Number(userIDLocation);

    console.log(typeof userID);

    api.get(`/users/${userID}`).then(response => console.log(response.data));
  }, [location]);

  return (
    <General>
      <ContainerGrid>
        <div className="perfil">
          <MainModal
            headerStyle={{ height: '64px', padding: '3px 15px' }}
            headerBackgroundColor="green"
            title="Perfil"
            subtitle="Informações da conta"
          >
            Perfil
          </MainModal>
        </div>

        <div className="orders">
          <MainModal
            headerStyle={{ height: '64px', padding: '3px 15px' }}
            headerBackgroundColor="yellow"
            title="Pedidos"
            subtitle="Pedidos realizados"
          >
            Pedidos
          </MainModal>
        </div>

        <div className="products">
          <MainModal
            headerStyle={{ height: '64px', padding: '3px 15px' }}
            headerBackgroundColor="blue"
            title="Produtos"
            subtitle="Produtos criados"
          >
            Produtos
          </MainModal>
        </div>
      </ContainerGrid>
    </General>
  );
};

export default UserDetails;
