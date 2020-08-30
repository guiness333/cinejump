import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Login/login";
import Signup from "./pages/Signup/signup";
import Home from "./pages/Home/home";

const Routes = () => (
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;