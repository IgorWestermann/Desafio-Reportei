import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

const Routes: React.FC = () => (
  <Switch>
    <Route  path="/" exact component={Dashboard}/>
    <Route  path="/profile" component={Profile}/>
  </Switch>
)

export default Routes;