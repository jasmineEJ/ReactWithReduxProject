import * as types from "./actionTypes";

export const findByCheckIn = () => {
  return { type: types.FILTER_BY_CHECKIN };
};

export const findByWheelChair = () => {
  return { type: types.FILTER_BY_WHEELCHAIR };
};

export const findByInfant = () => {
  return { type: types.FILTER_BY_INFANT };
};

export const findByPassport = () => {
  return { type: types.FILTER_BY_PASSPORT };
};

export const findByAddress = () => {
  return { type: types.FILTER_BY_ADDRESS };
};

export const findByDob = () => {
  return { type: types.FILTER_BY_ADDRESS };
};

export function applyFilters(filterCondition) {
  return function(dispatch, getState) {
    switch (filterCondition) {
      case "checkedIn":
        return dispatch(findByCheckIn());
      case "wheelChair":
        return dispatch(findByWheelChair());
      case "infant":
        return dispatch(findByInfant());
      default:
        return getState;
    }
  };
}

export function applyMissingMandatoryFilters(filterCondition) {
  return function(dispatch, getState) {
    switch (filterCondition) {
      case "passport":
        return dispatch(findByPassport());
      case "address":
        return dispatch(findByAddress());
      case "dob":
        return dispatch(findByDob());
      default:
        return getState;
    }
  };
}
