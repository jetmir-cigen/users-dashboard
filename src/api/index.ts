import axios from "axios";

// Create an instance of Axios with a base URL pointing to the Star Wars API
export const api = axios.create({
  baseURL: `https://swapi.dev/api/`,
  responseType: "json", // Set the default response type to JSON
});
