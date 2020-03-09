import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { uniqBy } from "lodash";
import { rolesConfig } from "../config/rolesConfig";
import * as Routes from "./index";
import Navigation from "../components/Navigations";
import NotFound from "../components/PageNotFound";

class PrivateRoutes extends Component {
  state = { allowedRoutes: [] };

  componentDidMount() {
    /*
      TODO: Replace hardcoded roles with redux,
       localStorage, or get from server.
     */
    let role = localStorage.getItem("role");
    console.log("role->", role);
    if (role) {
      role = ["common", role];

      let allowedRoutes = role.reduce((acc, role) => {
        console.log("rolesConfig[role]", rolesConfig[role]);
        return [...acc, ...rolesConfig[role].routes];
      }, []);

      //let allowedRoutes = [ ...rolesConfig[role].routes];

      // For removing duplicate entries, compare with 'url'.
      allowedRoutes = uniqBy(allowedRoutes, "url");
      this.setState({ allowedRoutes });
    } else {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <Fragment>
        <Navigation
          routes={this.state.allowedRoutes}
          path={this.props.match.path}
        />
        <Switch>
          {this.state.allowedRoutes.map(route => (
            <Route
              exact
              key={route.url}
              component={Routes[route.component]} // eslint-disable-line
              path={`${this.props.match.path}${route.url}`}
            />
          ))}
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    );
  }
}

export default PrivateRoutes;
