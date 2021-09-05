import React, { Fragment, useEffect } from 'react';
import Todo from "./Todo";
import login from "./auth/login";
import register from "./auth/register";
import Alert from "./layout/Alert";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import { USER_LOADED } from "./actions/types";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import Home from './utils/components/Home';

if(localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
      <Alert />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={login} />
          <Route exact path="/register" component={register} />
          <Route exact path="/todo" component={Todo} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
