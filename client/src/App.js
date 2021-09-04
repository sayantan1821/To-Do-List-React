import React from "react";
import Todo from "./Todo";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Todo} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
