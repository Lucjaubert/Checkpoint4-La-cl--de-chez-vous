import axios from "axios";

const apiUrl = import.meta.env.VITE_BACKEND_URL;

const postApi = (finalUrl, credentials) => {
  return axios
    .post(apiUrl + finalUrl, credentials)
    .then((response) => response.data);
};

// eslint-disable-next-line import/prefer-default-export
export const loginAgent = (credentials) => {
  return postApi("login/", credentials);
};

export const CreateAgent = ({
  firstname,
  lastname,
  phone,
  email,
  password,
}) => {
  return axios
    .post(apiUrl + "agent/createprofile", {
      firstname,
      lastname,
      phone,
      email,
      password,
    })
    .then((response) => response.data)
    .catch((err) => console.warn(err));
};

export const getAllAgents = () => {
  return axios.get(apiUrl + "agents");
};

export const getAgentById = (id) => {
  return axios.get(apiUrl + "agent/" + id);
};

export const createAgent = () => {
  return axios.post(apiUrl + "agent/createprofile");
};

export const deleteAgent = (id) => {
  return axios.delete(apiUrl + "agent/" + id);
};
