import React, { useCallback, createContext } from 'react';

import api from '../services/api';

interface ISignInCredentials {
  name: string;
  password: string;
}

interface IAuthContext {
  name: string;
  signIn(credentials: ISignInCredentials): Promise<void>;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ name, password }) => {
    const response = await api.post('sessions', { name, password });

    console.log(response);
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Pablo', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
