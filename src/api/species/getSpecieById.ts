import { api } from "..";

// Define a function to get a specie by ID from the API
export const getSpecieById = async (id: string) => {
  try {
    // Use the axios instance from the API module to send a GET request to the "species" endpoint
    // with the provided specie ID as a path parameter
    const response = await api.get(`species/${id}`);

    // Return the data from the response
    return response.data;
  } catch (err) {
    // Log any errors that occur
    console.log({ err });
  }
};
