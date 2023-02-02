import axios from "axios";

const apiUrl = import.meta.env.VITE_BACKEND_URL;

// eslint-disable-next-line import/prefer-default-export

export const GetAllBuyers = () => {
  return axios.get(apiUrl + "buyers");
};

export const GetBuyerById = (id) => {
  return axios.get(apiUrl + "buyer/" + id);
};

export const CreateBuyerForm = () => {
  return axios.post(apiUrl + "buyer/createprofile");
};

export const DeleteBuyerForm = (id) => {
  return axios.delete(apiUrl + "buyer/" + id);
};

export const UpdateBuyerForm = (id) => {
  return axios.put(apiUrl + "buyer/" + id);
};
