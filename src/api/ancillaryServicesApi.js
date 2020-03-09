import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/ancillary/";

export function getAllAncillaryServices() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveAncillaryService(service) {
  /*return fetch(
    baseUrl + "?serviceId=" + (service.serviceId ? service.serviceId : ""),*/
  return fetch(baseUrl + (service.id || ""), {
    method: service.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(service)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deletePassenger(serviceId) {
  return fetch(baseUrl + serviceId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
