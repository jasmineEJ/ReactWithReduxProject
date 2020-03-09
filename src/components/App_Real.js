import React from "react";
import { Router, Route, Switch, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import { Role } from "../../tools/role";
import { PrivateRoute } from "./login/PrivateRoute";
import LoginPage from "./login/LoginPage";
import { AdminPage } from "./admin/AdminPage";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import PassengerPage from "./passengers/PassengerPage";
import ManagePassengerPage from "./passengers/ManagePassengers";
import FlightsPage from "./flights/FlightsPage";
import SeatMap from "./seatMap/SeatMap";
import AncillaryServicePage from "./ancillaryServices/AncillaryServicePage";
import ManageServicePage from "./ancillaryServices/ManageServices";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";

import "./App.css";

export const history = createBrowserHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAdmin: false
    };
  }
  render() {
    const { currentUser, isAdmin } = this.state;
    return (
      <Router history={history}>
        <div>
          {currentUser && (
            <nav className="navbar navbar-expand navbar-dark bg-dark">
              <div className="navbar-nav">
                <Link to="/" className="nav-item nav-link">
                  Home
                </Link>
                {isAdmin && (
                  <Link to="/admin" className="nav-item nav-link">
                    Admin
                  </Link>
                )}
                <a onClick={this.logout} className="nav-item nav-link">
                  Logout
                </a>
              </div>
            </nav>
          )}
          <div className="jumbotron">
            <div className="container">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <PrivateRoute exact path="/" component={HomePage} />
                  <PrivateRoute
                    path="/admin"
                    roles={[Role.Admin]}
                    component={AdminPage}
                  />
                  <PrivateRoute
                    path="/passengers"
                    roles={[Role.User]}
                    component={PassengerPage}
                  />
                  <PrivateRoute
                    path="/flights"
                    roles={[Role.User]}
                    component={FlightsPage}
                  />
                  <PrivateRoute
                    path="/passenger/:id"
                    roles={[Role.User]}
                    component={ManagePassengerPage}
                  />
                  <PrivateRoute
                    path="/passenger"
                    roles={[Role.User]}
                    component={ManagePassengerPage}
                  />
                  <PrivateRoute
                    path="/seatmap/:flightId"
                    roles={[Role.User]}
                    component={SeatMap}
                  />
                  <PrivateRoute
                    path="/seatmap"
                    roles={[Role.User]}
                    component={SeatMap}
                  />
                  <PrivateRoute
                    path="/ancillary"
                    roles={[Role.User]}
                    component={AncillaryServicePage}
                  />
                  <PrivateRoute
                    path="/ancillary/:id"
                    roles={[Role.User]}
                    component={ManageServicePage}
                  />
                  <PrivateRoute
                    path="/service"
                    roles={[Role.User]}
                    component={ManageServicePage}
                  />

                  <Route path="/login" component={LoginPage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
