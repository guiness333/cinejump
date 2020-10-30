import React from "react";
import Main from "./pages/Login/login";
import Signup from "./pages/Signup/signup";
import Home from "./pages/Home/home";
import { PrivateRoute } from "./privateRoute";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/signup" component={Signup} />
      <PrivateRoute path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
