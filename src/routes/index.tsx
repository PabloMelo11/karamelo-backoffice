import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './routes';

import SignIn from '../pages/SingIn';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
