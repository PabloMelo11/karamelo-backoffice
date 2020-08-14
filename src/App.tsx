import React from 'react';

import { AuthProvider } from './Hooks/AuthContext';

import GlobalStyle from './styles/global';

import ToastContainer from './components/ToastContainer';

import SignIn from './pages/SingIn';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <ToastContainer />
    <GlobalStyle />
  </>
);

export default App;
