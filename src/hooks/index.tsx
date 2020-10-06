import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { UsersProvider } from './users';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <UsersProvider>
      <ToastProvider>{children}</ToastProvider>
    </UsersProvider>
  </AuthProvider>
);

export default AppProvider;
