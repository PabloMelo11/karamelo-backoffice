import React from 'react';

import AppProvider from './hooks';

import GlobalStyle from './styles/global';

import SignIn from './pages/SingIn';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
