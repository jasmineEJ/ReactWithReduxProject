import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import GoogleLogin from "react-google-login";
import HomePage from "./home/HomePage";
import PassengerPage from "./passengers/PassengerPage";
import ManagePassengerPage from "./passengers/ManagePassengers";
import FlightsPage from "./flights/FlightsPage";
import SeatMap from "./seatMap/SeatMap";
import AncillaryServicePage from "./ancillaryServices/AncillaryServicePage";
import ManageServicePage from "./ancillaryServices/ManageServices";
import DashboardPage from "./dashboard/DashboardPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";

import LoginPage from "./login/Login";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthorized: false,
      roleChosen: "",
      loggedOut: false
    };
  }

  checkLogOut = isLogOut => {
    debugger;
    console.log("check->", isLogOut);
    this.setState({ loggedOut: isLogOut, roleChosen: "", isAuthorized: false });
  };

  checkAuthorization = () => {
    debugger;
    let isAuthorized = false;
    let roleChosen = "";
    if (localStorage) {
      if (
        localStorage.role === "admin" ||
        localStorage.role === "airlineStaff"
      ) {
        roleChosen = localStorage.role;
        isAuthorized = true;
        this.forceUpdate();
      } else {
        isAuthorized = false;
        roleChosen = "";
      }
    }
    this.setState({ isAuthorized, roleChosen });
  };
  componentDidMount() {
    this.checkAuthorization();
  }

  componentDidUpdate(nextProps, prevState) {
    console.log("prev state", prevState);
    if (this.state.isAuthorized) {
      return;
    }
  }
  render() {
    return (
      <div className="app-container">
        <div>
          {this.state.isAuthorized === true ? (
            <>
              <Header
                roleChosen={this.state.roleChosen}
                checkLogOut={this.checkLogOut}
              />
              <Switch>
                <Route exact path="/app" component={HomePage} />
                <Route path="/app/dashboard" component={DashboardPage} />
                <Route path="/app/checkin" component={FlightsPage} />
                <Route path="/app/flights" component={FlightsPage} />
                <Route
                  path="/app/passengers/:flightId"
                  component={PassengerPage}
                />
                <Route path="/app/passengers" component={PassengerPage} />
                <Route
                  path="/app/passenger/:id"
                  component={ManagePassengerPage}
                />
                <Route path="/app/passenger" component={ManagePassengerPage} />
                <Route path="/app/seatmap/:flightId" component={SeatMap} />
                <Route path="/app/seatmap" component={SeatMap} />
                <Route path="/app/ancillary" component={AncillaryServicePage} />
                <Route path="/app/service/:id" component={ManageServicePage} />
                <Route path="/app/service" component={ManageServicePage} />
                <Route component={PageNotFound} />
              </Switch>
            </>
          ) : (
            <Route exact path="/" component={LoginPage} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
