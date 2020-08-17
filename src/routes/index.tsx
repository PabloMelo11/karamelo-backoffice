import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SingIn';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />
  </Switch>
);

export default Routes;
