import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const ancillaryServiceReducers = (
  state = initialState.ancillaryServices,
  action
) => {
  switch (action.type) {
    case types.LOAD_SERVICES_SUCCESS:
      return action.ansServices;
    case types.UPDATE_SERVICE_SUCCESS:
      return state.map(service =>
        service.id === action.updatedService.id
          ? action.updatedService
          : service
      );
    case types.CREATE_SERVICE_SUCCESS:
      return [...state, { ...action.createdService }];
    case types.DELETE_SERVICE_SUCCESS:
      return state.filter(service => service.id !== action.deletedService.id);
    default:
      return state;
  }
};

export default ancillaryServiceReducers;
