import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const flightReducers = (state = initialState.flights, action) => {
  switch (action.type) {
    case types.LOAD_FLIGHT_SUCCESS:
      return action.flights;
    case types.CREATE_FLIGHT_SUCCESS:
      return [...state, { ...action.flight }];
    case types.UPDATE_FLIGHT_SUCCESS:
      return state.map(flight => {
        flight.flightId === action.flight.flightId ? action.flight : flight;
      });
    case types.FILTER_RESERVED_SEATS_BY_ID:
      return state.filter(flight =>
        flight.flightId === parseInt(action.flightId) ? { ...flight } : null
      );
    case types.SEARCH_FLIGHT_BY_DEPARTURE:
      debugger;
      return state.filter(
        flight => flight.departure.substring(0, 10) === action.departureTime
      );
    default:
      return state;
  }
};

export default flightReducers;
