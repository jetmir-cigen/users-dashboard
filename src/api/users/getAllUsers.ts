import { api } from "..";

export const getAllUsers = async (query = "") => {
  try {
    const response = await api.get(`people${query}`);
    return response.data;
  } catch (err) {
    console.log({ err });
  }
};
