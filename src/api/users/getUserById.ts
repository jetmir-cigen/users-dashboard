import { api } from "..";

export const getUserById = async (id: string) => {
  try {
    const response = await api.get(`people/${id}`);
    console.log({ response });
    return response.data;
  } catch (err) {
    console.log({ err });
  }
};
