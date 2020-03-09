import * as types from "./actionTypes";
import * as flightApi from "../../api/flightApi";
import { func } from "prop-types";

export const loadFlightSuccess = flights => {
  return { type: types.LOAD_FLIGHT_SUCCESS, flights };
};

export const updateFlightSuccess = flight => {
  return { type: types.UPDATE_FLIGHT_SUCCESS, flight };
};

export const createFlightSuccess = flight => {
  return { type: types.CREATE_FLIGHT_SUCCESS, flight };
};

export const findReservedSeatsById = flightId => {
  return { type: types.FILTER_RESERVED_SEATS_BY_ID, flightId };
};

export const findFlightByDeparture = departureTime => {
  return { type: types.SEARCH_FLIGHT_BY_DEPARTURE, departureTime };
};

export function loadFlights() {
  return function(dispatch) {
    return flightApi
      .getFlights()
      .then(flights => dispatch(loadFlightSuccess(flights)))
      .catch(error => {
        throw error;
      });
  };
}

export function saveFlight(flight) {
  return function(dispatch) {
    return flightApi
      .saveFlightData(flight)
      .then(savedFlight => {
        flight.flightId
          ? dispatch(updateFlightSuccess(savedFlight))
          : dispatch(createFlightSuccess(savedFlight));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function getReservedSeatsByFlightId(flightId) {
  return function(dispatch, getState) {
    return flightId ? dispatch(findReservedSeatsById(flightId)) : getState;
  };
}

export function searchFlightsByDeparture(query) {
  return function(dispatch, getState) {
    return query.departure
      ? dispatch(findFlightByDeparture(query.departure))
      : getState;
  };
}
