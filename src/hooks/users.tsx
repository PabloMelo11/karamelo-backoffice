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
  page: number;
  lastPage: number;
  handleGetAllUsers(): void;
  handleAddNewUser(newUser: User): void;
  handleNextPage(): void;
  handlePreviousPage(): void;
}
const UsersContext = createContext<IUsersContext>({} as IUsersContext);

export const UsersProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(0);

  const { addToast } = useToast();

  const handleGetAllUsers = useCallback(() => {
    setLoading(true);

    try {
      api
        .get('/users', {
          params: {
            page,
          },
        })
        .then(response => {
          setUsers(response.data.data);
          setLastPage(response.data.lastPage);
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
  }, [addToast, page]);

  const handleAddNewUser = useCallback(
    (newUser: User) => {
      setUsers([...users, newUser]);
    },
    [users],
  );

  const handleNextPage = useCallback(() => {
    setPage(oldState => oldState + 1);
  }, []);

  const handlePreviousPage = useCallback(() => {
    setPage(oldState => oldState - 1);
  }, []);

  return (
    <UsersContext.Provider
      value={{
        users,
        page,
        lastPage,
        loading,
        handleGetAllUsers,
        handleAddNewUser,
        handleNextPage,
        handlePreviousPage,
      }}
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
