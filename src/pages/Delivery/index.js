import React from 'react';
import { useRouteMatch, Route, Switch } from 'react-router-dom';

import DeliveryNew from './new';
import DeliveryList from './list';

export default function Delivery() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/`} exact component={DeliveryList} />
      <Route path={`${path}/new`} component={DeliveryNew} />
    </Switch>
  );
}
