import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default App;
