import React from 'react';
import {
  Route as ReactRouterRoute,
  RouteProps as ReactRouterRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

interface RouteProps extends ReactRouterRouteProps {
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return (
    <ReactRouterRoute
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default Route;
