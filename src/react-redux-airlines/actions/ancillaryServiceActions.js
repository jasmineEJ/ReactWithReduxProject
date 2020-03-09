import * as types from "./actionTypes";
import * as ancillaryServicesApi from "../../api/ancillaryServicesApi";

export const loadAncillaryServicesSuccess = ansServices => {
  return { type: types.LOAD_SERVICES_SUCCESS, ansServices };
};

export const updateServiceSuccess = updatedService => {
  return { type: types.UPDATE_SERVICE_SUCCESS, updatedService };
};

export const createServiceSuccess = createdService => {
  return { type: types.CREATE_SERVICE_SUCCESS, createdService };
};

export const deleteServiceSuccess = deletedService => {
  return { type: types.DELETE_SERVICE_SUCCESS, deletedService };
};

export function loadAncillaryServices() {
  return function(dispatch) {
    return ancillaryServicesApi
      .getAllAncillaryServices()
      .then(ansServices => dispatch(loadAncillaryServicesSuccess(ansServices)))
      .catch(error => {
        throw error;
      });
  };
}

export function saveAncillaryService(service) {
  return function(dispatch) {
    return ancillaryServicesApi
      .saveAncillaryService(service)
      .then(savedService => {
        service.id
          ? dispatch(updateServiceSuccess(savedService))
          : dispatch(createServiceSuccess(savedService));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function deleteService(service) {
  return function(dispatch) {
    dispatch(deleteServiceSuccess(service));
    return ancillaryServicesApi.deletePassenger(service.id);
  };
}
