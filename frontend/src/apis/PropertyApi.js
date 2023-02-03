// eslint-disable-next-line import/prefer-default-export
import axios from "axios";

const apiUrl = import.meta.env.VITE_BACKEND_URL;

// eslint-disable-next-line import/prefer-default-export
export const GetAllProperties = () => {
  return axios.get(apiUrl + "/properties");
};

export const GetPropertyById = (id) => {
  return axios.get(apiUrl + "/properties/" + id);
};

export const CreatePropertyForm = (id) => {
  return axios.post(apiUrl + "/properties/" + id);
};

export const UpdatePropertyForm = (id) => {
  return axios.put(apiUrl + "/properties/" + id);
};

export const DeletePropertyForm = (id) => {
  return axios.delete(apiUrl + "/property" + id);
};
