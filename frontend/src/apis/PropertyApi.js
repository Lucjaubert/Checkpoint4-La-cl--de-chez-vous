// eslint-disable-next-line import/prefer-default-export
import axios from "axios";

const apiUrl = import.meta.env.VITE_BACKEND_URL;

// eslint-disable-next-line import/prefer-default-export
export const GetAllProperties = () => {
  return axios.get(apiUrl + "properties/cities");
};

export const GetPropertyById = (id) => {
  return axios.get(apiUrl + "property/" + id);
};

export const GetPropertyByPrice = () => {
  return axios.get(apiUrl + "property/selling_price_including_VAT");
};

export const CreatePropertyForm = (id) => {
  return axios.post(apiUrl + "property" + id);
};

export const UpdatePropertyForm = (id) => {
  return axios.put(apiUrl + "property" + id);
};

export const DeletePropertyForm = (id) => {
  return axios.delete(apiUrl + "property" + id);
};
