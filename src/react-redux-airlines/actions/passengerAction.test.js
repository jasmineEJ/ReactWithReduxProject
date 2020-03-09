import * as passengerActions from "./passengerActions";
import * as types from "./actionTypes";
import { passengers } from "../../../tools/airlines-mockdata";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

// Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe("Load passengers Thunk", () => {
    it("should create LOAD_PASSENGER_SUCCESS when loading passengers", () => {
      fetchMock.mock("*", {
        body: passengers,
        headers: { "content-type": "application/json" }
      });

      const expectedActions = [
        { type: types.LOAD_PASSENGER_SUCCESS, passengers }
      ];

      const store = mockStore({ passengers: [] });
      return store.dispatch(passengerActions.loadPassengers()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe("should create a new passenger in createPassengerSuccess function", () => {
  it("should create a CREATE_COURSE_SUCCESS action", () => {
    //arrange
    const passenger = passengers[0];
    const expectedAction = {
      type: types.CREATE_PASSENGER_SUCCESS,
      passenger
    };

    //act
    const action = passengerActions.createPassengerSuccess(passenger);

    //assert
    expect(action).toEqual(expectedAction);
  });
});
