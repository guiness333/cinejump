import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main/main";
import Signup from "./pages/Signup/signup";

const Routes = () => (
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/signup" component={Signup} />
    </Switch>
  </BrowserRouter>
);

export default Routes;