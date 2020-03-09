import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SeatMapModal from "../seatMap/SeatMapDialog";

const DashboardFlightList = ({
  flights,
  flight,
  passengers,
  context,
  ...props
}) => {
  const onClickNext = () => {
    debugger;
    console.log("see the value", props);
    props.nextHandler &&
      props.nextHandler({
        data: {
          passengersData: passengers,
          flightData: flight
        }
      });
  };
  return (
    <>
      <h3>Flight Details {context === "checkin" ? " Based on Search" : ""}</h3>
      <Table bordered responsive>
        <thead>
          <tr>
            <th>Flight Name</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Price</th>
            <th>Manage Passengers</th>
          </tr>
        </thead>
        <tbody>
          {flights.map(flight => {
            return (
              <tr key={flight.flightId}>
                <td>{flight.flightName}</td>
                <td>{flight.source}</td>
                <td>{flight.destination}</td>
                <td>{flight.departure}</td>
                <td>{flight.arrival}</td>
                <td>{flight.price}</td>
                <td>
                  <Button onClick={onClickNext}>Manage Passengers</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
DashboardFlightList.propTypes = {
  flights: PropTypes.array.isRequired,
  showPassengers: PropTypes.func,
  showPassengersClicked: PropTypes.bool,
  passengers: PropTypes.array,
  context: PropTypes.string,
  nextHandler: PropTypes.func,
  backHandler: PropTypes.func
};

export default DashboardFlightList;
