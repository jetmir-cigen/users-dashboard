import { api } from "..";

// Define a function to get all users from the API
export const getAllUsers = async (query = "") => {
  try {
    // Use the axios instance from the API module to send a GET request to the "people" endpoint
    // with an optional query string parameter
    const response = await api.get(`people${query}`);

    // Return the data from the response
    return response.data;
  } catch (err) {
    // Log any errors that occur
    console.log({ err });
  }
};
