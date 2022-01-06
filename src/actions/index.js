import axios from "axios";
import { API_KEY } from "../config";
import { BASE_URL, BACKEND_URL } from "../constants";

export const FETCH_START = "FETCH_START";
export const FETCH_QUERY = "FETCH_QUERY";
export const FETCH_ERROR = "FETCH_ERROR";
export const ADD_REXY = "ADD_REXY";
export const DELETE_REXY = "DELETE_REXY";
export const FIND_REXY_MOVIE = "FIND_REXY_MOVIE";
export const FIND_MOVIE = "FIND_MOVIE";
export const FIND_TV = "FIND_TV";
export const GET_FRIENDS = "GET_FRIENDS";
export const DISCOVER_MOVIE = "DISCOVER_MOVIE";
export const DISCOVER_TV = "DISCOVER_TV";
export const TRENDING = "TRENDING";
export const AUTHORIZE_USER = "AUTHORIZE_USER";
export const SET_USER = "SET_USER";
export const SET_PROFILE = "SET_PROFILE";

export const getQueryResults = (category, query) => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get(`${BASE_URL}/3/search/${category}?api_key=${API_KEY}&query=${query}`)
      .then((res) => dispatch(fetchQuery(res.data.results)))
      .catch((err) => dispatch(fetchError(err)));
  };
};
export const findContentById = (id, type, isRexy) => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get(`${BASE_URL}/3/${type}/${id}?api_key=${API_KEY}`)
      .then((res) => {
        if (type === "movie") {
          dispatch(isRexy ? findRexyMovie(res.data) : findMovie(res.data));
        } else {
          dispatch(findTVShow(res.data));
        }
      })
      .catch((err) => dispatch(fetchError(err)));
  };
};
export const getFriends = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get("https://randomuser.me/api/?results=10")
      .then((res) => dispatch(friendsList(res.data.results)))
      .catch((err) => dispatch(fetchError(err)));
  };
};
export const discoverContent = (type) => {
  return (dispatch) => {
    dispatch(fetchStart());
    if (type === "trending") {
      axios
        .get(`${BASE_URL}/3/trending/all/day?api_key=${API_KEY}`)
        .then((res) => dispatch(trendingList(res.data.results)))
        .catch((err) => dispatch(fetchError(err)));
    }
    axios
      .get(
        `${BASE_URL}/3/discover/${type}?api_key=${API_KEY}&sort_by=popularity.desc`
      )
      .then((res) => {
        dispatch(
          type === "movie"
            ? discoverMovieList(res.data.results)
            : discoverTvList(res.data.results)
        );
      })
      .catch((err) => dispatch(fetchError(err)));
  };
};
export const loginUser = (credentials) => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .post(`${BACKEND_URL}/auth/login`, credentials)
      .then((res) => {
        dispatch(authorizeUser(res.data));
        getUser(res.data.user_id);
        getProfile(res.data.user_id);
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => dispatch(fetchError(err)));
  };
};
export const getUser = (user_id) => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get(`${BACKEND_URL}/users/${user_id}`)
      .then((res) => {
        dispatch(setUser(res.data));
      })
      .catch((err) => dispatch(fetchError(err)))
  }
}
export const getProfile = (user_id) => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get(`${BACKEND_URL}/profile/${user_id}`)
      .then((res) => {
        dispatch(setProfile(res.data));
      })
      .catch((err) => dispatch(fetchError(err)));
  };
};

export const fetchStart = () => {
  return { type: FETCH_START };
};
export const fetchQuery = (query) => {
  return { type: FETCH_QUERY, payload: query };
};
export const fetchError = (error) => {
  return { type: FETCH_ERROR, payload: error };
};
export const addRexy = (id) => {
  return { type: ADD_REXY, payload: id };
};
export const deleteRexy = (id) => {
  return { type: DELETE_REXY, payload: id };
};
export const findRexyMovie = (rexyMovie) => {
  return { type: FIND_REXY_MOVIE, payload: rexyMovie };
};
export const findMovie = (movie) => {
  return { type: FIND_MOVIE, payload: movie };
};
export const findTVShow = (show) => {
  return { type: FIND_TV, payload: show };
};
export const friendsList = (friends) => {
  return { type: GET_FRIENDS, payload: friends };
};
export const discoverMovieList = (movies) => {
  return { type: DISCOVER_MOVIE, payload: movies };
};
export const discoverTvList = (tvShows) => {
  return { type: DISCOVER_TV, payload: tvShows };
};
export const trendingList = (trending) => {
  return { type: TRENDING, payload: trending };
};
export const authorizeUser = (auth) => {
  return { type: AUTHORIZE_USER, payload: auth };
};
export const setUser = (user) => {
  return { type: SET_USER, payload: user };
};
export const setProfile = (profile) => {
  return { type: SET_PROFILE, payload: profile };
};