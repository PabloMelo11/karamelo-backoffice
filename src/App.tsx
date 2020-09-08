import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AppProvider from './hooks';

import GlobalStyle from './styles/global';
import main from './styles/themes/main';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <ThemeProvider theme={main}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </ThemeProvider>

    <GlobalStyle />
  </Router>
);

export default App;
