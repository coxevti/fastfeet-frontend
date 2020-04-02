import React from 'react';
import { useRouteMatch, Route, Switch } from 'react-router-dom';

import OrderList from './list';
import OrderNew from './new';

export default function Order() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/`} exact component={OrderList} />
      <Route path={`${path}/new`} component={OrderNew} />
    </Switch>
  );
}
