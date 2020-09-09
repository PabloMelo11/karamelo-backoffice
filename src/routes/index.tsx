import React from 'react';
import { Switch, Redirect, Route as RouteDOM } from 'react-router-dom';

import Route from './routes';

import SignIn from '../pages/SingIn';

import Dashboard from '../pages/Dashboard';
import Panels from '../pages/Panels';
import Cart from '../pages/Cart';
import Catalog from '../pages/Catalog';
import Customers from '../pages/Customers';
import Products from '../pages/Products';
import Reports from '../pages/Reports';
import Users from '../pages/Users';
import Profile from '../pages/Profile';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/panels" component={Panels} isPrivate />
    <RouteDOM exact path="/general" isPrivate>
      <Redirect to="/general/users" />
    </RouteDOM>
    <Route path="/cart" component={Cart} isPrivate />
    <Route path="/catalog" component={Catalog} isPrivate />
    <Route path="/general/customers" component={Customers} isPrivate />
    <Route path="/general/products" component={Products} isPrivate />
    <Route path="/reports" component={Reports} isPrivate />
    <Route path="/general/users" component={Users} isPrivate />
    <Route path="/me" component={Profile} isPrivate />
  </Switch>
);

export default Routes;
