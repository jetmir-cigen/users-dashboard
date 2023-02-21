import { api } from "..";

// Define a function to get a vehicle by ID from the API
export const getVehicleById = async (id: string) => {
  try {
    // Use the axios instance from the API module to send a GET request to the "vehicles" endpoint
    // with the provided vehicle ID as a path parameter
    const response = await api.get(`vehicles/${id}`);

    // Return the data from the response
    return response.data;
  } catch (err) {
    // Log any errors that occur
    console.log({ err });
  }
};
