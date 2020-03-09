import config from "config";
import { authHeader, handleAuthenticationResponse } from "../api/apiUtils";

export const userService = {
  getAll,
  getById
};

function getAll() {
  const requestOptions = { method: "GET", headers: authHeader() };
  return fetch(`${config.apiUrl}/users`, requestOptions).then(
    handleAuthenticationResponse
  );
}

function getById(id) {
  const requestOptions = { method: "GET", headers: authHeader() };
  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(
    handleAuthenticationResponse
  );
}
