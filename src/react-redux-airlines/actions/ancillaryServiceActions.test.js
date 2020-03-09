import * as actions from "./ancillaryServiceActions";
import * as types from "./actionTypes";

describe("To test service actions types with payload", () => {
  it("should load all ancillary services", () => {
    const ansServices = [
      {
        serviceName: "Special meals",
        cost: "5000"
      },
      {
        serviceName: "Blanket",
        cost: "1000"
      },
      {
        serviceName: "Magazines",
        cost: "500"
      }
    ];
    const expectedLoadAction = {
      type: types.LOAD_SERVICES_SUCCESS,
      ansServices
    };
    expect(actions.loadAncillaryServicesSuccess(ansServices)).toEqual(
      expectedLoadAction
    );
  });
  it("should add ancillary service in createServiceSuccess", () => {
    const createdService = {
      serviceName: "Inflight Entertainment",
      cost: "1000"
    };
    const expectedAction = {
      type: types.CREATE_SERVICE_SUCCESS,
      createdService
    };
    expect(actions.createServiceSuccess(createdService)).toEqual(
      expectedAction
    );
  });

  it("should update ancillary service", () => {
    const updatedService = {
      serviceName: "Airport Lounge",
      cost: "9000"
    };

    const expectedAction = {
      type: types.UPDATE_SERVICE_SUCCESS,
      updatedService
    };

    expect(actions.updateServiceSuccess(updatedService)).toEqual(
      expectedAction
    );
  });

  it("should delete the selected ancillary service", () => {
    const deletedService = {
      serviceName: "Blanket",
      cost: "1000"
    };

    const expectedAction = {
      type: types.DELETE_SERVICE_SUCCESS,
      deletedService
    };

    expect(actions.deleteServiceSuccess(deletedService)).toEqual(
      expectedAction
    );
  });
});
