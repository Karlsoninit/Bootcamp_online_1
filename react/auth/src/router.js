import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";

export const useRouter = (auth) => {
  console.log("auth", auth);
  if (auth) {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Redirect to="/login" />
    </Switch>
  );
};
