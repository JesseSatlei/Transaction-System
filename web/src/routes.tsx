import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Transaction from './pages/Transaction';
import ListTransaction from './pages/ListTransaction';
import NotFound from './pages/NotFound';
import PrivateRoute from './PrivateRoute';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <PrivateRoute path="/transaction" exact component={Transaction} />
        <PrivateRoute path="/list-transaction" exact component={ListTransaction} />
        <PrivateRoute component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;