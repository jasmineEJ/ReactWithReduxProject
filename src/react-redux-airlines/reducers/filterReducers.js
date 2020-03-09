import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const passengerReducers = (state = initialState.passengers, action) => {
  switch (action.type) {
    case types.FILTER_BY_CHECKIN:
      return state.map(passenger => passenger.isCheckedIn);
    case types.FILTER_BY_WHEELCHAIR:
      return state.map(passenger => passenger.isWheelChairRequired);
    case types.FILTER_BY_INFANT:
      return state.map(passenger => passenger.hasInfants);
    case types.FILTER_BY_PASSPORT:
      return state.filter(passenger => passenger.isPassportAvailable);
    case types.FILTER_BY_ADDRESS:
      return state.filter(passenger => passenger.India !== "");
    case types.FILTER_BY_DOB:
      return state.filter(passenger => passenger.birthdate !== "");

    default:
      return state;
  }
};

export default passengerReducers;
