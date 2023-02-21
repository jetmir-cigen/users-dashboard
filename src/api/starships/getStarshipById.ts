import { api } from "..";

// Define a function to get a starship by ID from the API
export const getStarshipById = async (id: string) => {
  try {
    // Use the axios instance from the API module to send a GET request to the "starships" endpoint
    // with the provided starship ID as a path parameter
    const response = await api.get(`starships/${id}`);

    // Return the data from the response
    return response.data;
  } catch (err) {
    // Log any errors that occur
    console.log({ err });
  }
};
