import { BACKEND_URL } from "../constants";
import axios from "axios";

export const registerNewUser = (newUser) => {
  axios
    .post(`${BACKEND_URL}/auth/register`, newUser)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
export const addUserMovie = (movie_id, user_id) => {
  axios
    .post(`${BACKEND_URL}/profile/movies`, {
      movie_id,
      user_id,
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
export const addUserTvShow = (tv_show_id, user_id) => {
  axios
    .post(`${BACKEND_URL}/profile/tv-shows`, {
      tv_show_id,
      user_id,
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
