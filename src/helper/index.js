import { BACKEND_URL } from "../constants";
import axios from "axios";

export const registerNewUser = (newUser) => {
  axios
    .post(`${BACKEND_URL}/auth/register`, newUser)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const loginUser = (credentials) => {
  let result;
  axios
    .post(`${BACKEND_URL}/auth/login`, credentials)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      result = res.data;
    })
    .catch((err) => (result = err));
  return result;
};
