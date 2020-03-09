import React from "react";
import { Nav, Button } from "react-bootstrap";
import { NavLink, NavDropdown } from "react-router-dom";
import history from "../../utils/history";
import "./common.css";
const Header = props => {
  const activeStyle = { color: "#F15B2A" };
  const handleLogout = () => {
    debugger;
    console.log("props in navigation", props);
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    history.push("/");
    props.checkLogOut(true);
  };
  return (
    <>
      <div style={{ background: "lavender" }}>
        <p>Welcome &nbsp;&nbsp;{localStorage.username}</p>
        <p>Email : {localStorage.email}</p>
      </div>
      <Nav fill variant="tabs" defaultActiveKey="/">
        {props.roleChosen === "airlineStaff" ? (
          <>
            <Nav.Item>
              <NavLink exact to="/app" activeStyle={activeStyle}>
                Check-in Management
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/app/flights" activeStyle={activeStyle}>
                In-Flight Management
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/app/ancillary" activeStyle={activeStyle}>
                Ancillary Services Management
              </NavLink>
            </Nav.Item>
          </>
        ) : (
          <Nav.Item>
            <NavLink to="/app/dashboard" activeStyle={activeStyle}>
              Dashboard
            </NavLink>
          </Nav.Item>
        )}
        <Nav.Item>
          <Button onClick={handleLogout}>Logout</Button>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Header;
