import React, { useCallback, createContext, useState } from 'react';

import api from '../services/api';

interface IAuthState {
  token: string;
  user: object;
}

interface ISignInCredentials {
  name: string;
  password: string;
}

interface IAuthContext {
  user: Object;
  signIn(credentials: ISignInCredentials): Promise<void>;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@Karamelo:token');
    const user = localStorage.getItem('@Karamelo:user');

    if (token && user) {
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

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
