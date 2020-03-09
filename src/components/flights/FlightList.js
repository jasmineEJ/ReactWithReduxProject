import React from "react";
import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SeatMapModal from "../seatMap/SeatMapDialog";

const FlightList = ({ flights, passengers, context, ...props }) => {
  console.log("props in flight list", props);
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
            <th>Book Flight</th>
            <th>Show</th>
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
                  <Link
                    to={{
                      pathname: "/app/seatMap/" + flight.flightId,
                      state: {
                        flightData: flight,
                        passengersData: passengers,
                        context: context
                      }
                    }}
                  >
                    Seat Map
                  </Link>
                </td>
                <td>
                  <Link
                    className="btn btn-primary"
                    to={{
                      pathname: "/app/passengers/",
                      state: {
                        showPassengers: true,
                        flightData: flight,
                        context: context
                      }
                    }}
                  >
                    Show Passengers
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
FlightList.propTypes = {
  flights: PropTypes.array.isRequired,
  showPassengers: PropTypes.func,
  showPassengersClicked: PropTypes.bool,
  passengers: PropTypes.array,
  context: PropTypes.string
};

export default FlightList;
