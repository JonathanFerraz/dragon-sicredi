import React from 'react';
import { Switch, useLocation, Route, Redirect } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import { useAuth } from '../hooks/useAuth';
import {
  Login,
  Register,
  CompletedRegister,
  Home,
  NewDragon,
  EditDragon,
  ViewDragon,
  NotFound,
} from '../pages';
import PrivateRoute from './Route';

const Routes: React.FC = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/">
          {isAuthenticated() ? (
            <Redirect to={RoutesPaths.home} />
          ) : (
            <Redirect to={RoutesPaths.login} />
          )}
        </Route>
        <Route path={RoutesPaths.login} exact component={Login} />
        <Route path={RoutesPaths.register} exact component={Register} />
        <Route
          path={RoutesPaths.completedRegister}
          component={CompletedRegister}
        />
        <PrivateRoute path={RoutesPaths.home} exact component={Home} />
        <PrivateRoute
          path={RoutesPaths.newDragon}
          exact
          component={NewDragon}
        />
        <PrivateRoute
          path={`${RoutesPaths.editDragon}/:id`}
          exact
          component={EditDragon}
        />
        <PrivateRoute
          path={`${RoutesPaths.viewDragon}/:id`}
          exact
          component={ViewDragon}
        />

        <Route path={RoutesPaths.notFound} component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
};

class RoutesPaths {
  static login = '/login';
  static register = '/register';
  static completedRegister = '/completed-register';
  static home = '/home';
  static newDragon = '/dragon-add';
  static editDragon = '/dragon-edit';
  static viewDragon = '/dragon-detail';
  static notFound = '*';
}
export { RoutesPaths };

export default Routes;
