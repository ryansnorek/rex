import { BACKEND_URL } from "../constants";
import axios from "axios";
import axiosAuthorization from "../utils";
import { findUserContentById } from "../actions";

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

export const loadUserContent = (contentIds, dispatch, contentList) => {
  const { movies, tvShows } = contentList;
  if (contentIds.movies !== []) {
    contentIds.movies.forEach((movie) => {
      dispatch(findUserContentById(movie.movie_id, "movie"));
    });
  }
  if (contentIds.tvShows !== []) {
    contentIds.tvShows.forEach((tvShow) => {
      dispatch(findUserContentById(tvShow.tv_show_id, "tv"));
    });
  }
  return [movies, tvShows];
};
