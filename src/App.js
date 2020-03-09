import React, { useState } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { Container, Row, Col } from "react-bootstrap";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import Login from "./components/login/Login";
import history from "./utils/history";

import AppLayout from "./AppLayout";

const authentication = () =>
  localStorage.getItem("role") ? <Redirect to="/app" /> : <PublicRoutes />;

const App = () => {
  const [isAuthorized, setAuthorized] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const responseGoogle = response => {
    setAuthorized(true);
    console.log(response);
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
  };
  return (
    <Container fluid>
      <p>Welcome: {name}</p>
      <p>Email : {email}</p>
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
      <Row>
        <Col>
          <Switch>
            <AppLayout path="/app" component={PrivateRoutes} />
            <Route path="/" component={Login} />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default authentication;
