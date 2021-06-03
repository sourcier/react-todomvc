import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "todomvc-common/base.css";
import "todomvc-app-css/index.css";
import "./App.css";

import Home from "./Home";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Provider>
);

export default App;
