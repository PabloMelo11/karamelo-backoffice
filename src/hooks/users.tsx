import React, { createContext, useContext, useCallback, useState } from 'react';

import api from '../services/api';

import { useToast } from './toast';

interface User {
  id: number;
  avatar_url: string;
  email: string;
  name: string;
  status: string;
}

interface IUsersContext {
  users: User[];
  loading: boolean;
  handleGetAllUsers(): void;
  handleAddNewUser(newUser: User): void;
}
const UsersContext = createContext<IUsersContext>({} as IUsersContext);

export const UsersProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const { addToast } = useToast();

  const handleGetAllUsers = useCallback(() => {
    setLoading(true);

    try {
      api.get('/users').then(response => {
        setUsers(response.data.data);
      });
      setLoading(false);
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Ops...',
        description: 'Houve um erro ao buscar os usuarios, tente novamente.',
      });
      setLoading(false);
    }
  }, [addToast]);

  const handleAddNewUser = useCallback(
    (newUser: User) => {
      setUsers([...users, newUser]);
    },
    [users],
  );

  return (
    <UsersContext.Provider
      value={{ users, loading, handleGetAllUsers, handleAddNewUser }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export function useUsers(): IUsersContext {
  const context = useContext(UsersContext);

  if (!context) {
    throw new Error('useUsers must be used within a UsersProvider');
  }

  return context;
}
