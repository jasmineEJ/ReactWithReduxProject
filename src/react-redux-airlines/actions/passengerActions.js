import * as types from "./actionTypes";
import * as passengerApi from "../../api/passengerApi";

export const loadPassengerSuccess = passengers => {
  return { type: types.LOAD_PASSENGER_SUCCESS, passengers };
};

export const updatePassengerSuccess = passenger => {
  return { type: types.UPDATE_PASSENGER_SUCCESS, passenger };
};

export const createPassengerSuccess = passenger => {
  return { type: types.CREATE_PASSENGER_SUCCESS, passenger };
};

export const deletePassengerSuccess = passenger => {
  return { type: types.DELETE_PASSENGER_SUCCESS, passenger };
};

export const updateSeatNumberSuccess = (passenger, seatNumber) => {
  return {
    type: types.UPDATE_SEAT_SUCCESS,
    payload: { passenger, seatNumber }
  };
};

export const updateMealsSuccess = (passenger, meal) => {
  return {
    type: types.UPDATE_MEAL_SUCCESS,
    payload: { passenger, meal }
  };
};

export const showPassengersByFlightId = flightId => {
  return { type: types.SHOW_PASSENGERS_BY_FLIGHT_ID, flightId };
};

export function loadPassengers() {
  return function(dispatch) {
    return passengerApi
      .getPassengers()
      .then(passengers => dispatch(loadPassengerSuccess(passengers)))
      .catch(error => {
        throw error;
      });
  };
}

export function savePassenger(passenger) {
  return function(dispatch) {
    return passengerApi
      .savePassenger(passenger)
      .then(savedPassenger => {
        passenger.id
          ? dispatch(updatePassengerSuccess(savedPassenger))
          : dispatch(createPassengerSuccess(savedPassenger));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function deletePassenger(passenger) {
  return function(dispatch) {
    dispatch(deletePassengerSuccess(passenger));
    return passengerApi.deletePassenger(passenger.id);
  };
}

export function updateSeat(passenger, seatNumber) {
  return function(dispatch) {
    return passengerApi
      .savePassenger(passenger)
      .then(savedPassenger => {
        dispatch(updateSeatNumberSuccess(savedPassenger, seatNumber));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function showPassengersPerFlight(flightId) {
  return function(dispatch) {
    debugger;
    return dispatch(showPassengersByFlightId(flightId));
  };
}

export function updateMeal(passenger, meal) {
  return function(dispatch) {
    return passengerApi
      .savePassenger(passenger)
      .then(savedPassenger => {
        console.log("update passenger -1");
        dispatch(updateMealsSuccess(savedPassenger, meal));
        console.log("after update passenger -2");
      })
      .catch(error => {
        throw error;
      });
  };
}
