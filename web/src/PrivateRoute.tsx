import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router';
// Verifica se o cliente está logado em rotas privadas
function PrivateRoute(props: RouteProps) {
  const isLogged = !!localStorage.getItem('app-token');
  return isLogged ? <Route {...props} /> : <Redirect to="/"/>
}

export default PrivateRoute;