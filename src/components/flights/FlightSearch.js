import React, { useState } from "react";
import PropTypes from "prop-types";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Link } from "react-router-dom";
import { Container, Row, Col, Label, Button } from "react-bootstrap";

import CalendarInput from "../common/CalendarInput";
import Autocomplete from "../common/Autocomplete";
import FlightResult from "./FlightsPage";

import { cities } from "../constants/Constants";
import "./flights.css";

//import FlightSearch from "../flights/FlightSearch";

const FlightSearch = ({ searchInput, handleChange }) => {
  return (
    <Jumbotron>
      <h4> Search Flights</h4>
      <Container>
        <Row className="align-margin-top">
          <Col>
            <Autocomplete
              label="Source"
              placeholder="Source"
              name="source"
              hints={cities}
              onChangeAuto={handleChange}
              value={searchInput.source}
            />
          </Col>

          <Col>
            <Autocomplete
              label="Destination"
              placeholder="Destination"
              name="destination"
              hints={cities}
              onChangeAuto={handleChange}
              value={searchInput.destination}
            />
          </Col>
        </Row>
        <Row className="align-margin-top">
          <Col>
            <CalendarInput
              name="departure"
              label="Departure Date"
              value={searchInput.departure ? searchInput.departure : ""}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <CalendarInput
              name="arrival"
              label="Arrival Date"
              value={searchInput.arrival ? searchInput.arrival : ""}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="align-margin-top">
          <Col>
            <Link
              to={{ pathname: "/app/checkin", state: { searchInput } }}
              className="btn btn-primary"
            >
              Search
            </Link>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

FlightSearch.propTypes = {
  handleChange: PropTypes.func,
  searchInput: PropTypes.object
};

export default FlightSearch;
