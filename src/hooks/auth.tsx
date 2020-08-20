import React, { useCallback, createContext, useState, useContext } from 'react';

import api from '../services/api';

interface IUser {
  id: number;
  avatar?: string;
  avatar_url: string;
  email: string;
  name: string;
}

interface IAuthState {
  token: string;
  user: IUser;
}

interface ISignInCredentials {
  name: string;
  password: string;
}

interface IAuthContext {
  user: IUser;
  signIn(credentials: ISignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: IUser): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@Karamelo:token');
    const user = localStorage.getItem('@Karamelo:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ name, password }) => {
    const response = await api.post('sessions', { name, password });

    const { token, user } = response.data;

    localStorage.setItem('@Karamelo:token', token);
    localStorage.setItem('@Karamelo:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Karamelo:token');
    localStorage.removeItem('@Karamelo:user');

    setData({} as IAuthState);
  }, []);

  const updateUser = useCallback(
    (user: IUser) => {
      localStorage.setItem('@GoBarber:user', JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
