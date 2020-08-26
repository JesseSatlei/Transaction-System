import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router';

function PrivateRoute(props: RouteProps) {
  const isLogged = !!localStorage.getItem('app-token');
  console.log(isLogged);
  return isLogged ? <Route {...props} /> : <Redirect to="/"/>
}

export default PrivateRoute;