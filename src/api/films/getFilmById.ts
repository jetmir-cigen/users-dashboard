import { api } from "..";

// Define a function to get a film by ID from the API
export const getFilmById = async (id: string) => {
  try {
    // Use the axios instance from the API module to send a GET request to the "films" endpoint
    // with the provided film ID as a path parameter
    const response = await api.get(`films/${id}`);

    // Return the data from the response
    return response.data;
  } catch (err) {
    // Log any errors that occur
    console.log({ err });
  }
};
