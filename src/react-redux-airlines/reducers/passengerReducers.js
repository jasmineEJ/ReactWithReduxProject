import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const passengerReducers = (state = initialState.passengers, action) => {
  switch (action.type) {
    case types.LOAD_PASSENGER_SUCCESS:
      return action.passengers;
    case types.CREATE_PASSENGER_SUCCESS:
      return [...state, { ...action.passenger }];
    case types.UPDATE_PASSENGER_SUCCESS:
      return state.map(passenger =>
        passenger.id === action.passenger.id ? action.passenger : passenger
      );
    case types.DELETE_PASSENGER_SUCCESS:
      return [...state].splice(action.passenger.id, 1);
    //return state.filter(passenger => passenger.id !== action.passenger.id);
    case types.SHOW_PASSENGERS_BY_FLIGHT_ID:
      return state.filter(
        passenger => parseInt(passenger.flightId) === action.flightId
      );
    case types.FILTER_BY_CHECKIN:
      return state.filter(passenger => passenger.isCheckedIn);
    case types.FILTER_BY_WHEELCHAIR:
      return state.filter(passenger => passenger.isWheelChairRequired);
    case types.FILTER_BY_INFANT:
      return state.filter(passenger => passenger.hasInfants);
    case types.UPDATE_SEAT_SUCCESS:
      debugger;
      return ((state && [...state]) || []).map(passenger => {
        if (passenger.id === action.payload.passenger.id) {
          const item = { ...passenger };
          item.seatNumber = action.payload.seatNumber;
          return item;
        } else {
          return passenger;
        }
      });
    case types.UPDATE_MEAL_SUCCESS:
      debugger;
      return ((state && [...state]) || []).map(passenger => {
        if (passenger.id === action.payload.passenger.id) {
          const item = { ...passenger };
          item.mealPreference = action.payload.meal;
          return item;
        } else {
          return passenger;
        }
      });

    default:
      return state;
  }
};

export default passengerReducers;
