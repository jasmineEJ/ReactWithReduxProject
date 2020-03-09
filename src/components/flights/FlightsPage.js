import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import FlightList from "./FlightList";
import { newFlight } from "../../../tools/airlines-mockdata";
import { loadFlights } from "../../react-redux-airlines/actions/flightActions";
import { loadPassengers } from "../../react-redux-airlines/actions/passengerActions";

const FlightsPage = ({
  flights,
  passengers,
  loadFlights,
  loadPassengers,
  context,
  ...props
}) => {
  const [flight, setFlight] = useState({ ...props.flight });
  const [passenger, setPassenger] = useState({ ...props.passenger });
  useEffect(() => {
    if (flights.length === 0) {
      loadFlights().catch(error => {
        alert("Flight Details loading failed", error);
      });
    } else {
      setFlight({ ...props.flight });
    }
    if (passengers.length === 0) {
      loadPassengers().catch(error => {
        alert("Passenger Details loading failed", error);
      });
    } else {
      setPassenger({ ...props.passenger });
    }
  }, [flights, passengers]);

  return (
    <FlightList
      flights={flights}
      flight={flight}
      passengers={passengers}
      context={context}
      {...props}
    />
  );
};

FlightsPage.propTypes = {
  flights: PropTypes.array,
  passengers: PropTypes.array,
  loadFlights: PropTypes.func,
  loadPassengers: PropTypes.func,
  flight: PropTypes.object,
  match: PropTypes.object,
  passenger: PropTypes.object,
  context: PropTypes.string
};

export function getFlightById(flights, id) {
  return flights.find(flight =>
    flight.flightId === parseInt(id) ? { ...flight } : null
  );
}

export function getFlightsBasedOnSearch(flights, searchParam) {
  let flightArr = [];
  debugger;
  flights.filter(item => {
    let departureDate = item.departure.substring(0, 10);
    let arrivalDate = item.arrival.substring(0, 10);
    console.log("flight item->", item);
    if (departureDate === searchParam.departure) {
      flightArr.push(item);
    } else if (arrivalDate === searchParam.arrival) {
      flightArr.push(item);
    } else if (item.source === searchParam.source) {
      flightArr.push(item);
    } else if (item.destination === searchParam.destination) {
      flightArr.push(item);
    } else {
      null;
    }
  });
  console.log("filtered array->", flightArr);
  return flightArr;
}

function mapStateToProps(state, ownProps) {
  let idFromProps = ownProps.match ? ownProps.match.params.flightId : "";
  let searchParam = ownProps.history
    ? ownProps.history.location.state
      ? ownProps.history.location.state.searchInput
      : ""
    : "";

  console.log("searchParam->", searchParam.departure);
  console.log("idShownInURL->", idFromProps);
  console.log("state->", state);
  let flight =
    idFromProps && state.flights.length > 0
      ? getFlightById(state.flights, idFromProps)
      : newFlight;

  let searchResultFlights =
    searchParam !== "" && state.flights.length > 0
      ? getFlightsBasedOnSearch(state.flights, searchParam)
      : [];
  return {
    context: searchParam !== "" ? "checkin" : "inflight",
    passengers: state.passengers,
    flights:
      searchResultFlights && searchResultFlights.length > 0
        ? searchResultFlights
        : state.flights,
    flight
  };
}

const mapDispatchToProps = {
  loadFlights,
  loadPassengers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightsPage);
