import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Form } from '@unform/web';
import { useLocation } from 'react-router-dom';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { FaBox, FaBoxes } from 'react-icons/fa';

import api from '../../../services/api';

import truncateString from '../../../utils/truncateString';
import formattedDate from '../../../utils/dates';
import formatMoney from '../../../utils/formatMoney';

import General from '../../../components/General';
import MainModal from '../../../components/MainModal';
import Input from '../../../components/Input';

import { ContainerGrid, Content, Row, TdStatus, NotContent } from './styles';

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
  customer: {
    id: number;
    name: string;
  };
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
    if (orderStatus === 'in_progress') return 'Em progresso';
    if (orderStatus === 'done') return 'Feito';
    if (orderStatus === 'finished') return 'Finalizado';
    if (orderStatus === 'canceled') return 'Cancelado';
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
    <General
      containerStyles={{
        background: 'transparent',
        boxShadow: 'none',
      }}
    >
      <ContainerGrid className="grid">
        <div className="perfil">
          <MainModal
            headerStyle={{ padding: '3px 15px' }}
            containerStyles={{
              minHeight: '330px',
              marginBottom: '12px',
            }}
            title="Perfil"
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
                  <div>
                    <span>Código do usuario</span>
                    <Input
                      name="id"
                      placeholder="Código"
                      mask=""
                      disabled
                      autoComplete="off"
                    />
                  </div>

                  <div>
                    <span>Usuário</span>
                    <Input
                      name="name"
                      placeholder="Usuário"
                      mask=""
                      disabled
                      autoComplete="off"
                    />
                  </div>
                </Row>

                <Row style={{ marginTop: 20 }}>
                  <div>
                    <span>E-mail</span>
                    <Input
                      name="email"
                      placeholder="E-mail"
                      mask=""
                      disabled
                      autoComplete="off"
                    />
                  </div>

                  <div>
                    <span>Status</span>
                    <Input
                      name="status"
                      placeholder="Status"
                      mask=""
                      disabled
                      autoComplete="off"
                    />
                  </div>
                </Row>
              </Form>
            )}
          </MainModal>
        </div>

        <div className="orders">
          <MainModal
            headerStyle={{ padding: '3px 15px' }}
            containerStyles={{
              height: '100%',
              maxHeight: '330px',
              minHeight: '330px',
              marginBottom: '12px',
            }}
            contentStyles={{ margin: '18px 15px 12px' }}
            title="Pedidos"
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
                  {user.orders && user.orders.length > 0 ? (
                    user.orders.map(order => (
                      <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.customer.name}</td>
                        <TdStatus status={order.status}>
                          <span>{formattedStatusOrder(order.status)}</span>
                        </TdStatus>
                        <td>{formatMoney(order.total)}</td>
                        <td>{formattedDate.formatDateWithHour(order.date)}</td>
                        <td>
                          {formattedDate.formatDateWithHour(order.created_at)}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <NotContent>
                      <MdRemoveShoppingCart size={62} />
                      <span>Nenhum pedido criado.</span>
                    </NotContent>
                  )}
                </tbody>
              </table>
            </Content>
          </MainModal>
        </div>

        <div className="products">
          <MainModal
            headerStyle={{ padding: '3px 15px' }}
            containerStyles={{
              height: '100%',
              maxHeight: '330px',
              minHeight: '330px',
              marginBottom: '12px',
            }}
            contentStyles={{ margin: '18px 15px 12px' }}
            title="Produtos"
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
                  {user.products && user.products.length > 0 ? (
                    user.products.map(product => (
                      <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td title={product.description}>
                          {truncateString(product.description, 60)}
                        </td>
                        <td>
                          {formattedDate.formatDateWithHour(product.created_at)}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <NotContent>
                      <FaBox size={48} />
                      <span>Nenhum produto criado.</span>
                    </NotContent>
                  )}
                </tbody>
              </table>
            </Content>
          </MainModal>
        </div>

        <div className="categories">
          <MainModal
            headerStyle={{ padding: '3px 15px' }}
            containerStyles={{
              height: '100%',
              maxHeight: '330px',
              minHeight: '330px',
              marginBottom: '12px',
            }}
            contentStyles={{ margin: '18px 15px 12px' }}
            title="Categorias"
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
                  {user.categories && user.categories.length > 0 ? (
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
                    ))
                  ) : (
                    <NotContent>
                      <FaBoxes size={48} />
                      <span>Nenhuma categoria criada.</span>
                    </NotContent>
                  )}
                </tbody>
              </table>
            </Content>
          </MainModal>
        </div>
      </ContainerGrid>
    </General>
  );
};

export default UserDetails;
