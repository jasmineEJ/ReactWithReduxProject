import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import GoogleLogin from "react-google-login";
import JumbotronWrapper from "../common/JumbotranWrapper";
import history from "../../utils/history";

class Login extends Component {
  constructor(props) {
    super(props);
  }
  state = { selectedRole: "", isAuthorized: false };

  //const [isAuthorized, setAuthorized] = useState(false);
  responseGoogle = response => {
    debugger;
    this.setState({ isAuthorized: true });
    console.log("response->", response);
    console.log("Before props->", this.props);
    localStorage.setItem("role", this.state.selectedRole);
    localStorage.setItem("username", response.profileObj.name);
    localStorage.setItem("email", response.profileObj.email);

    this.props.history.push("/app");
  };

  handleChange = event => {
    let selectedRole = event.target.value;
    this.setState({ selectedRole });
  };

  handleClick = () => {
    localStorage.setItem("role", this.state.selectedRole);
    this.props.history.push("/app");
  };

  render() {
    return (
      <JumbotronWrapper title="Login" description="">
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Select Role:</Form.Label>
          <Form.Control
            as="select"
            value={this.state.selectedRole}
            onChange={this.handleChange}
          >
            <option value="select">Select Role</option>
            <option value="admin">Admin</option>
            <option value="airlineStaff">Airline Staff</option>
          </Form.Control>
        </Form.Group>

        {!this.state.isAuthorized ? (
          <div>
            <GoogleLogin
              clientId="503611650091-ujq28uojhvn5l4jlf7bfdr1lf5t6jqqh.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        ) : null}
      </JumbotronWrapper>
    );
  }
}

export default Login;
