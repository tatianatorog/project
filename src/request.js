import axios from "./axios";


export const getUserInfoById = async (id) => {
const rest = await axios.get(`/${id}/`);
  return rest.data.data;
};

export const createNewUser = async (id, fields) => {
  return await axios.post(`/${id}/`, fields);
};

export const updateUserInfo = async (id, fields) => {
  return await axios.put(`/${id}/`, fields);
};
