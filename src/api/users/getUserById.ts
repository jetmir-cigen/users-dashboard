import { api } from "..";

// Define a function to get a user by ID from the API
export const getUserById = async (id: string) => {
  try {
    // Use the axios instance from the API module to send a GET request to the "people" endpoint
    // with the provided user ID as a path parameter
    const response = await api.get(`people/${id}`);

    // Return the data from the response
    return response.data;
  } catch (err) {
    // Log any errors that occur
    console.log({ err });
  }
};
