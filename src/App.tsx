import React from 'react';

import AuthContext from './context/AuthContext';

import GlobalStyle from './styles/global';

import SignIn from './pages/SingIn';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Pablo' }}>
      <SignIn />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);

export default App;
