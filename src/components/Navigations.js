import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import history from "../utils/history";

class Navigation extends Component {
  handleLogout = () => {
    debugger;
    console.log("props in navigation", this.props);
    localStorage.removeItem("roles");
    history.push("/");
  };

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          {this.props.routes.map(route => (
            <Link
              key={route.url}
              className="nav-link"
              to={`${this.props.path}${route.url}`}
            >
              {route.title}
            </Link>
          ))}
        </Nav>
        <Button onClick={this.handleLogout}>Logout</Button>
      </Navbar>
    );
  }
}

Navigation.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  path: PropTypes.string.isRequired
};

export default Navigation;
