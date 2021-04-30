import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  RecoilRoot,
} from 'recoil'
import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

import DebugObserver from './libs/recoil/DebugObserver'
import Home from './Home';

const App = () => (
  <RecoilRoot>
    {process.env.NODE_ENV === 'development' && <DebugObserver />}
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </RecoilRoot>
);

export default App;
