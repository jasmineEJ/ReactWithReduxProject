import { combineReducers } from "redux";
import passengers from "./passengerReducers";
import flights from "./flightReducers";
import ancillaryServices from "./ancillaryServiceReducers";
import filter from "./filterReducers";

const rootReducer = combineReducers({
  passengers,
  flights,
  ancillaryServices,
  filter
});

export default rootReducer;
