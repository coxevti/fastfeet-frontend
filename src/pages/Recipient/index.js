import React from 'react';
import { useRouteMatch, Route, Switch } from 'react-router-dom';

import RecipientNew from './new';
import RecipientList from './list';

export default function Recipient() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/`} exact component={RecipientList} />
      <Route path={`${path}/new`} component={RecipientNew} />
    </Switch>
  );
}
