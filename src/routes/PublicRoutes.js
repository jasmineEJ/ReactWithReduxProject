import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../components/login/Login";
import NotFound from "../components/PageNotFound";

const PublicRoutes = ({ match }) => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </Fragment>
);

export default PublicRoutes;
