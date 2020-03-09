import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/flights/";

export function getFlights() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveFlightData(passenger) {
  return fetch(baseUrl, {
    method: passenger.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(passenger)
  })
    .then(handleResponse)
    .catch(handleError);
}
