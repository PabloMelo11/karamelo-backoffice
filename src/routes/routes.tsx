import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

import DefaultLayout from '../pages/_layouts';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  if (!user && isPrivate) {
    return <Redirect to="/" />;
  }

  if (user && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return !user ? (
          <Component />
        ) : (
          <DefaultLayout>
            <Component />
          </DefaultLayout>
        );
      }}
    />
  );
};

export default Route;
