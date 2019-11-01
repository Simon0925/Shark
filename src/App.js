import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./pages/login";
import Profile from "./pages/profile";
import General from "./pages/general";
import Contacts from "./pages/contacts";

import withDefaultLayout from "./hoc/layouts/withDefaultLayout";
import withAuthLayout from "./hoc/layouts/withAuthLayout";
import PrivateRoute from "./hoc/PrivateRoute";

import "./App.css";

const App = () => (
  <div >
    <Switch>
      <PrivateRoute path="/" render={withDefaultLayout(General)} exact />
      <PrivateRoute path="/contacts" render={withDefaultLayout(Contacts)} />
      <PrivateRoute path="/profile" render={withDefaultLayout(Profile)} />
      <Route path="/login" render={withAuthLayout(Login)} />
      <Route render={() => <h1>Page not found</h1>} />
    </Switch>
  </div>
);

export default App;
