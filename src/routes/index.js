import React from 'react';
import { Switch } from 'react-router-dom';

import Route from '~/routes/Route';

import SignIn from '~/pages/SignIn';

import Order from '~/pages/Order';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/orders" component={Order} isPrivate />
    </Switch>
  );
}
