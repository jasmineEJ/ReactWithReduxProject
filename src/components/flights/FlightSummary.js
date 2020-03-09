import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import { Jumbotron, Button } from "react-bootstrap";
import TextInput from "../common/TextInput";

import "./flights.css";

const FlightSummary = ({ flight }) => {
  debugger;
  const [redirectToAddPassengerPage, setRedirectToAddPassengerPage] = useState(
    false
  );
  return (
    <Jumbotron>
      <h6>Flight Summary</h6>
      <table>
        <tbody>
          <tr>
            <td className="subheading">Flight Name:</td>
            <td>
              <TextInput name="name" value={flight.flightName} readOnlyVal />
            </td>
            <td className="subheading">Source:</td>
            <td>
              <TextInput name="source" value={flight.source} readOnlyVal />
            </td>
            <td className="subheading">Destination:</td>
            <td>
              <TextInput
                name="destination"
                value={flight.destination}
                readOnlyVal
              />
            </td>
          </tr>
          <tr>
            <td className="subheading">Departure:</td>
            <td>
              <TextInput name="name" value={flight.departure} readOnlyVal />
            </td>
            <td className="subheading">Arrival:</td>
            <td>
              <TextInput name="name" value={flight.arrival} readOnlyVal />
            </td>
            <td className="subheading">Price:</td>
            <td>
              <TextInput name="name" value={flight.price} readOnlyVal />
            </td>
          </tr>
          <tr>
            <td>
              {redirectToAddPassengerPage && (
                <Redirect
                  to={{
                    pathname: "/app/passenger",
                    state: {
                      showPassenger: true
                    }
                  }}
                />
              )}
              <Button
                variant="primary"
                onClick={() => setRedirectToAddPassengerPage(true)}
              >
                Add Passenger
              </Button>
            </td>
            <td></td>
            <td>
              <Link
                to={{
                  pathname: "/seatMap/" + flight.flightId,
                  state: {
                    showMap: true,
                    flightData: flight
                  }
                }}
              >
                Seat Availability
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </Jumbotron>
  );
};

FlightSummary.propTypes = {
  flight: PropTypes.object
};

export default FlightSummary;
