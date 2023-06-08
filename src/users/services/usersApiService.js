import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8181";

//  send to the server user and get back token
export const login = async (user) => {
  try {
    const { data } = await axios.post(`${apiUrl}/users/login`, user);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const singup = async (user) => {
  try {
    const { data } = await axios.post(`${apiUrl}/users`, user);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
