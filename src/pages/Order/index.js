import React from 'react';
import { useRouteMatch, Route, Switch } from 'react-router-dom';

import OrderList from './list';
import OrderNew from './new';
import OrderEdit from './edit';

export default function Order() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/`} exact component={OrderList} />
      <Route path={`${path}/new`} component={OrderNew} />
      <Route path={`${path}/edit/:id`} component={OrderEdit} />
    </Switch>
  );
}
