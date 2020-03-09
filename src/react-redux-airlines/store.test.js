import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import * as passengerActions from "./actions/passengerActions";

it("Should handle creating a new passenger", function() {
  // arrange
  const store = createStore(rootReducer, initialState);
  const passenger = {
    name: "merlin"
  };

  // act
  const action = passengerActions.createPassengerSuccess(passenger);
  store.dispatch(action);

  // assert
  const createdPassenger = store.getState().passengers[0];
  console.log("createdPassenger", store.getState());
  expect(createdPassenger).toEqual(passenger);
});
