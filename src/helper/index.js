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
