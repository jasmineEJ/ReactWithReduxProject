import passengerReducer from "./passengerReducers";
import * as actions from "../actions/passengerActions";

describe("should test functions in passengerReducer", () => {
  it("should add passenger when passed CREATE_PASSENGER_SUCCESS", () => {
    // arrange
    const initialState = [
      {
        name: "john"
      },
      {
        name: "jemi"
      }
    ];

    const newPassenger = {
      name: "vidhya"
    };

    const action = actions.createPassengerSuccess(newPassenger);

    // act
    const newState = passengerReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(3);
    expect(newState[0].name).toEqual("john");
    expect(newState[1].name).toEqual("jemi");
    expect(newState[2].name).toEqual("vidhya");
  });

  it("should update course when passed UPDATE_COURSE_SUCCESS", () => {
    // arrange
    const initialState = [
      { id: 1, name: "john" },
      { id: 2, name: "jemi" },
      { id: 3, name: "vidhya" }
    ];

    const passenger = { id: 2, name: "jessie" };
    const action = actions.updatePassengerSuccess(passenger);

    // act
    const newState = passengerReducer(initialState, action);
    const updatedPassenger = newState.find(a => a.id == passenger.id);
    const untouchedPassenger = newState.find(a => a.id == 1);

    // assert
    expect(updatedPassenger.name).toEqual("jessie");
    expect(untouchedPassenger.name).toEqual("john");
    expect(newState.length).toEqual(3);
  });
});
