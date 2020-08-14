import React from 'react';

import { AuthProvider } from './context/AuthContext';

import GlobalStyle from './styles/global';

import SignIn from './pages/SingIn';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
