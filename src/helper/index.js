import { BACKEND_URL } from "../constants";
import axios from "axios";
import axiosAuthorization from "../utils";

const token = localStorage.getItem("token");

export const registerNewUser = (newUser) => {
  axios
    .post(`${BACKEND_URL}/auth/register`, newUser)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
export const addUserMovie = (movie_id, user_id) => {
  axiosAuthorization(token)
    .post(`/profile/movies`, {
      movie_id,
      user_id,
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
export const addUserTvShow = (tv_show_id, user_id) => {
  axiosAuthorization(token)
    .post(`/profile/tv-shows`, {
      tv_show_id,
      user_id,
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
