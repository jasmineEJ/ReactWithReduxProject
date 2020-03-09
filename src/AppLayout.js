import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import GoogleLogin from "react-google-login";
import HomePage from "./components/home/HomePage";
import PassengerPage from "./components/passengers/PassengerPage";
import ManagePassengerPage from "./components/passengers/ManagePassengers";
import FlightsPage from "./components/flights/FlightsPage";
import SeatMap from "./components/seatMap/SeatMap";
import AncillaryServicePage from "./components/ancillaryServices/AncillaryServicePage";
import ManageServicePage from "./components/ancillaryServices/ManageServices";
import DashboardPage from "./components/dashboard/DashboardPage";
import Header from "./components/common/Header";
import Navigation from "./components/Navigations";

import LoginPage from "./components/login/Login";

import "./components/App.css";

const App = props => {
  console.log("check props->", props);
  const [isAuthorized, setAuthorized] = useState(false);
  const responseGoogle = response => {
    setAuthorized(true);
    console.log(response);
  };
  return (
    <div className="app-container">
      {!isAuthorized ? (
        <div>
          <GoogleLogin
            clientId="503611650091-ujq28uojhvn5l4jlf7bfdr1lf5t6jqqh.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      ) : null}
      <Navigation
        routes={this.state.allowedRoutes}
        path={this.props.match.path}
      />
      <div>
        <Route exact path="/app" component={HomePage} />
        <Route path="/app/dashboard" component={DashboardPage} />
        <Route path="/app/passengers" component={PassengerPage} />
        <Route path="/app/flights" component={FlightsPage} />
        <Route path="/app/passenger/:id" component={ManagePassengerPage} />
        <Route path="/app/passenger" component={ManagePassengerPage} />
        <Route path="/app/seatmap/:flightId" component={SeatMap} />
        <Route path="/app/seatmap" component={SeatMap} />
        <Route path="/app/ancillary" component={AncillaryServicePage} />
        <Route path="/app/service/:id" component={ManageServicePage} />
        <Route path="/app/service" component={ManageServicePage} />
      </div>
    </div>
  );
};

export default App;
