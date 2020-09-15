import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Form } from '@unform/web';
import { useLocation } from 'react-router-dom';

import api from '../../../services/api';
import truncateString from '../../../utils/truncateString';
import formattedDate from '../../../utils/dates';
import formatMoney from '../../../utils/formatMoney';

import General from '../../../components/General';
import MainModal from '../../../components/MainModal';
import InputForm from '../../../components/InputForm';

import { ContainerGrid, Container, Content, Row } from './styles';

interface ICategory {
  id: number;
  title: string;
  description: string;
  created_at: string;
}

interface IProduct {
  id: number;
  name: string;
  description: string;
  created_at: string;
}

interface IOrder {
  id: number;
  customer_id: number;
  status: string;
  total: number;
  date: string;
  created_at: string;
}
interface IUserProps {
  id: number;
  name: string;
  email: string;
  status: string;
  avatar_url: string;
  orders: IOrder[];
  products: IProduct[];
  categories: ICategory[];
}

const UserDetails: React.FC = () => {
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUserProps>({} as IUserProps);

  const handleNoSubmit = useCallback(() => {
    return '...';
  }, []);

  const formattedStatus = useMemo(() => {
    if (user.status === 'active') {
      return 'Ativo';
    }
    return 'Inativo';
  }, [user.status]);

  const formattedStatusOrder = useCallback(orderStatus => {
    if (orderStatus === 'pending') return 'Pendente';
    if (orderStatus === 'cancelled') return 'Cancelado';
    if (orderStatus === 'shipped') return 'Enviado';
    if (orderStatus === 'paid') return 'Pago';
    if (orderStatus === 'finished') return 'Finalizado';
  }, []);

  useEffect(() => {
    const userIDLocation = location.pathname
      .replace('/general/', '')
      .replace('/users', '');

    const userID = Number(userIDLocation);

    setLoading(true);

    api.get(`/users/${userID}`).then(response => {
      setUser(response.data[0]);
      setLoading(false);
    });
  }, [location]);

  return (
    <General>
      <Container className="container">
        <ContainerGrid className="grid">
          <div className="perfil">
            <MainModal
              headerStyle={{ height: '64px', padding: '3px 15px' }}
              headerBackgroundColor="green"
              containerStyles={{
                height: '100%',
                maxHeight: '350px',
                minHeight: '350px',
              }}
              title="Perfil"
              subtitle="Informações da conta"
            >
              {loading ? (
                'carregando...'
              ) : (
                <Form
                  onSubmit={handleNoSubmit}
                  initialData={{
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    status: formattedStatus,
                  }}
                >
                  <Row>
                    <InputForm
                      name="id"
                      placeholder="Código"
                      mask=""
                      color="green"
                      disabled
                    />
                    <InputForm
                      name="name"
                      placeholder="Usuário"
                      mask=""
                      color="green"
                      disabled
                    />
                  </Row>

                  <Row>
                    <InputForm
                      name="email"
                      placeholder="E-mail"
                      mask=""
                      color="green"
                      disabled
                    />

                    <InputForm
                      name="status"
                      placeholder="Status"
                      mask=""
                      color="green"
                      disabled
                    />
                  </Row>
                </Form>
              )}
            </MainModal>
          </div>

          <div className="orders">
            <MainModal
              headerStyle={{ height: '64px', padding: '3px 15px' }}
              headerBackgroundColor="yellow"
              containerStyles={{
                height: '100%',
                maxHeight: '350px',
                minHeight: '350px',
              }}
              contentStyles={{ margin: '18px 15px 12px' }}
              title="Pedidos"
              subtitle="Pedidos realizados"
            >
              <Content>
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Cliente</th>
                      <th>Status</th>
                      <th>Total</th>
                      <th>Data entrega</th>
                      <th>Criado em</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.orders &&
                      user.orders.length > 0 &&
                      user.orders.map(order => (
                        <tr key={order.id}>
                          <td>{order.id}</td>
                          <td>{order.customer_id}</td>
                          <td>{formattedStatusOrder(order.status)}</td>
                          <td>{formatMoney(order.total)}</td>
                          <td>
                            {formattedDate.formatDateWithHour(order.date)}
                          </td>
                          <td>
                            {formattedDate.formatDateWithHour(order.created_at)}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </Content>
            </MainModal>
          </div>

          <div className="products">
            <MainModal
              headerStyle={{ height: '64px', padding: '3px 15px' }}
              containerStyles={{
                height: '100%',
                maxHeight: '350px',
                minHeight: '350px',
              }}
              contentStyles={{ margin: '18px 15px 12px' }}
              headerBackgroundColor="blue"
              title="Produtos"
              subtitle="Produtos criados"
            >
              <Content>
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nome</th>
                      <th>Descrição</th>
                      <th>Criado em</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.products &&
                      user.products.length > 0 &&
                      user.products.map(product => (
                        <tr key={product.id}>
                          <td>{product.id}</td>
                          <td>{product.name}</td>
                          <td title={product.description}>
                            {truncateString(product.description, 60)}
                          </td>
                          <td>
                            {formattedDate.formatDateWithHour(
                              product.created_at,
                            )}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </Content>
            </MainModal>
          </div>

          <div className="categories">
            <MainModal
              headerStyle={{ height: '64px', padding: '3px 15px' }}
              containerStyles={{
                height: '100%',
                maxHeight: '350px',
                minHeight: '350px',
              }}
              contentStyles={{ margin: '18px 15px 12px' }}
              headerBackgroundColor="purple"
              title="Categorias"
              subtitle="Categorias criadas"
            >
              <Content>
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nome</th>
                      <th>Descrição</th>
                      <th>Criado em</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.categories &&
                      user.categories.length > 0 &&
                      user.categories.map(category => (
                        <tr key={category.id}>
                          <td>{category.id}</td>
                          <td>{category.title}</td>
                          <td title={category.description}>
                            {truncateString(category.description, 60)}
                          </td>
                          <td>
                            {formattedDate.formatDateWithHour(
                              category.created_at,
                            )}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </Content>
            </MainModal>
          </div>
        </ContainerGrid>
      </Container>
    </General>
  );
};

export default UserDetails;
