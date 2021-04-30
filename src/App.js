import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  RecoilRoot,
} from 'recoil'
import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

import Home from './Home';

const App = () => (
  <RecoilRoot>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </RecoilRoot>
);

export default App;
