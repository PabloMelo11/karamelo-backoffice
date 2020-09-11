import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import General from '../../components/General';

import { Container } from './styles';

interface IUsers {
  id: number;
  name: string;
  email: string;
  status: 'active' | 'inactive';
}

const Users: React.FC = () => {
  const history = useHistory();

  const [users, setUsers] = useState<IUsers[]>([]);

  const formattedStatus = useCallback((status: string): string => {
    if (status === 'active') {
      return 'Ativo';
    }
    return 'Inativo';
  }, []);

  const handleDetailsUser = useCallback(
    (userID: number) => {
      history.push(`/general/${userID}/users`);
    },
    [history],
  );

  useEffect(() => {
    api.get('/users').then(response => {
      setUsers(response.data.data);
    });
  }, []);

  return (
    <General>
      <Container>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.length > 0 &&
              users.map(user => (
                <tr
                  key={user.id}
                  title="Clique para ver os detalhes."
                  onClick={() => handleDetailsUser(user.id)}
                >
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{formattedStatus(user.status)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </Container>
    </General>
  );
};

export default Users;
