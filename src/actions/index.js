import axios from "axios";
import axiosAuthorization from "../utils";
import { API_KEY } from "../config";
import { BASE_URL, BACKEND_URL } from "../constants";

export const FETCH_START = "FETCH_START";
export const FETCH_QUERY = "FETCH_QUERY";
export const FETCH_ERROR = "FETCH_ERROR";
export const SET_USER_MOVIES = "SET_USER_MOVIES";
export const SET_USER_TV_SHOWS = "SET_USER_TV_SHOWS";
export const SET_RELATIONSHIPS = "SET_RELATIONSHIPS";
export const DELETE_REXY = "DELETE_REXY";
export const FIND_REXY_MOVIE = "FIND_REXY_MOVIE";
export const SET_ITEM_MOVIE = "SET_ITEM_MOVIE";
export const SET_ITEM_TV_SHOW = "SET_ITEM_TV_SHOW";
export const UNSET_ITEM = "UNSET_ITEM";
export const GET_FRIENDS = "GET_FRIENDS";
export const SET_FRIEND = "SET_FRIEND";
export const ADD_FRIEND_MOVIE_CONTENT = "ADD_FRIEND_MOVIE_CONTENT";
export const ADD_FRIEND_TV_CONTENT = "ADD_FRIEND_TV_CONTENT";
export const CLEAR_FRIEND_MOVIE_LIST = "CLEAR_FRIEND_MOVIE_LIST";
export const CLEAR_FRIEND_TV_LIST = "CLEAR_FRIEND_TV_LIST";
export const SET_DISCOVER_TRENDING = "SET_DISCOVER_TRENDING";
export const SET_DISCOVER_MOVIES = "SET_DISCOVER_MOVIES";
export const SET_DISCOVER_TV_SHOWS = "SET_DISCOVER_TV_SHOWS";
export const FETCHING_COMPLETE = "FETCHING_COMPLETE";
export const DISCOVER_MOVIE = "DISCOVER_MOVIE";
export const DISCOVER_TV = "DISCOVER_TV";
export const TRENDING = "TRENDING";
export const SET_FIRST_TIME_USER = "SET_FIRST_TIME_USER";
export const UNSET_FIRST_TIME_USER = "UNSET_FIRST_TIME_USER";
export const AUTHORIZE_USER = "AUTHORIZE_USER";
export const LOGIN_COMPLETE = "LOGIN_COMPLETE";
export const SET_USER = "SET_USER";
export const SET_PROFILE = "SET_PROFILE";
export const ADD_USER_MOVIE_CONTENT = "ADD_USER_MOVIE_CONTENT";
export const ADD_USER_TV_CONTENT = "ADD_USER_TV_CONTENT";
export const CLEAR_USER_MOVIE_LIST = "CLEAR_USER_MOVIE_LIST";
export const CLEAR_USER_TV_LIST = "CLEAR_USER_TV_LIST";

export const getQueryResults = (type, query) => {
  return (dispatch) => {
    dispatch(fetchStart());
    if (type === "users") {
      axiosAuthorization()
        .get(`users/username/${query}`)
        .then((users) => dispatch(setQueryResults(users.data)))
        .catch((err) => dispatch(fetchError(err)));
    } else {
      axios
        .get(`${BASE_URL}/3/search/${type}?api_key=${API_KEY}&query=${query}`)
        .then((content) => dispatch(setQueryResults(content.data.results)))
        .catch((err) => dispatch(fetchError(err)));
    }
  };
};
export const setQueryResults = (queryResults) => {
  return { type: FETCH_QUERY, payload: queryResults };
};
export const findContentById = (id, type) => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get(`${BASE_URL}/3/${type}/${id}?api_key=${API_KEY}`)
      .then((content) => {
        type === "movie"
          ? dispatch(setItemMovie(content.data))
          : dispatch(setItemTvShow(content.data));
      })
      .catch((err) => dispatch(fetchError(err)));
  };
};
export const setItemMovie = (movie) => {
  return { type: SET_ITEM_MOVIE, payload: movie };
};
export const setItemTvShow = (show) => {
  return { type: SET_ITEM_TV_SHOW, payload: show };
};
export const unSetItem = () => {
  return { type: UNSET_ITEM };
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
export const getFriendContent = (user_id) => {
  return async (dispatch) => {
    await dispatch(getFriendMovies(user_id));
    await dispatch(getFriendTvShows(user_id));
    await dispatch(getProfile({ user_id }, "friend"));
  };
};
export const getFriendMovies = (user_id) => {
  return (dispatch) => {
    dispatch(fetchStart());
    dispatch(clearFriendMovieList());
    axiosAuthorization()
      .get(`/profile/${user_id}/movies`)
      .then((movies) => {
        movies.data.forEach((movie) => {
          dispatch(findFriendContentById(movie.movie_id, "movie"));
        });
      });
  };
};
export const getFriendTvShows = (user_id) => {
  return (dispatch) => {
    dispatch(fetchStart());
    dispatch(clearFriendTvList());
    axiosAuthorization()
      .get(`/profile/${user_id}/tv-shows`)
      .then((tvShows) => {
        tvShows.data.forEach((tvShow) => {
          dispatch(findFriendContentById(tvShow.tv_show_id, "tv"));
        });
      });
  };
};
export const setFriend = (friend) => {
  return { type: SET_FRIEND, payload: friend };
};
export const findFriendContentById = (id, type) => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get(`${BASE_URL}/3/${type}/${id}?api_key=${API_KEY}`)
      .then((userContent) => {
        type === "movie"
          ? dispatch(addFriendMovieContent(userContent.data))
          : dispatch(addFriendTvContent(userContent.data));
      })
      .catch((err) => dispatch(fetchError(err)));
  };
};
export const addFriendMovieContent = (movie) => {
  return { type: ADD_FRIEND_MOVIE_CONTENT, payload: movie };
};
export const clearFriendMovieList = () => {
  return { type: CLEAR_FRIEND_MOVIE_LIST };
};
export const addFriendTvContent = (tvShow) => {
  return { type: ADD_FRIEND_TV_CONTENT, payload: tvShow };
};
export const clearFriendTvList = () => {
  return { type: CLEAR_FRIEND_TV_LIST };
};
export const discoverContent = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    try {
      axios
        .get(`${BASE_URL}/3/trending/all/day?api_key=${API_KEY}`)
        .then((content) => dispatch(setDiscoverTrending(content.data.results)));
      axios
        .get(
          `${BASE_URL}/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`
        )
        .then((content) => dispatch(setDiscoverMovies(content.data.results)));
      axios
        .get(
          `${BASE_URL}/3/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc`
        )
        .then((content) => dispatch(setDiscoverTvShows(content.data.results)));
    } catch (err) {
      dispatch(fetchError(err));
    }
    dispatch(fetchingComplete());
  };
};
export const setDiscoverTrending = (trending) => {
  return { type: SET_DISCOVER_TRENDING, payload: trending };
};
export const setDiscoverMovies = (movies) => {
  return { type: SET_DISCOVER_MOVIES, payload: movies };
};
export const setDiscoverTvShows = (tvShows) => {
  return { type: SET_DISCOVER_TV_SHOWS, payload: tvShows };
};
// USER //
export const registerNewUser = (newUser) => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .post(`${BACKEND_URL}/auth/register`, newUser)
      .then(() => dispatch(setFirstTimeUser()))
      .then(() => {
        const { username, password } = newUser;
        dispatch(loginUser({ username, password }));
      })
      .catch((err) => dispatch(fetchError(err)));
  };
};
export const setFirstTimeUser = () => {
  return { type: SET_FIRST_TIME_USER };
};
export const unsetFirstTimeUser = () => {
  return { type: UNSET_FIRST_TIME_USER };
};
export const loginUser = (credentials) => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .post(`${BACKEND_URL}/auth/login`, credentials)
      .then((res) => {
        res.data.authorized = true;
        dispatch(authorizeUser(res.data));
        localStorage.setItem("token", res.data.token);
        return res.data;
      })
      .then((data) => {
        dispatch(getUser(data));
        return data;
      })
      .then((data) => {
        dispatch(getProfile(data));
        return data;
      })
      .then((data) => {
        dispatch(getUserMovies(data.user_id));
        return data;
      })
      .then((data) => {
        dispatch(getUserTvShows(data.user_id));
        return data;
      })
      .then((data) => {
        dispatch(getRelationships(data.user_id));
        return data;
      })
      .then(() => dispatch(loginComplete()))
      .catch((err) => dispatch(fetchError(err)));
  };
};
export const authorizeUser = (auth) => {
  return { type: AUTHORIZE_USER, payload: auth };
};
export const getUser = (data, type) => {
  return (dispatch) => {
    dispatch(fetchStart());
    if (type === "friend") {
      axiosAuthorization()
        .get(`/users/${data.user_id}`)
        .then((friend) => {
          dispatch(setFriend(friend.data));
        })
        .catch((err) => fetchError(err));
    } else {
      axiosAuthorization()
        .get(`/users/${data.user_id}`)
        .then((user) => {
          dispatch(setUser(user.data));
        })
        .catch((err) => console.log(err));
    }
  };
};
export const setUser = (user) => {
  return { type: SET_USER, payload: user };
};
export const getProfile = (data, type) => {
  return (dispatch) => {
    dispatch(fetchStart());
    if (type === "friend") {
      axiosAuthorization()
        .get(`/profile/${data.user_id}`)
        .then((friendProfile) => {
          dispatch(setFriend(friendProfile.data));
        })
        .catch((err) => console.log(err));
    } else {
      axiosAuthorization()
        .get(`/profile/${data.user_id}`)
        .then((profile) => {
          dispatch(setProfile(profile.data));
        })
        .catch((err) => console.log(err));
    }
  };
};

// USER PROFILE -==-=-=--=-==--=-=-==--=-=-
export const setProfile = (profile) => {
  return { type: SET_PROFILE, payload: profile };
};
export const updateUserProfile = (profileEdits, user_id) => {
  return (dispatch) => {
    dispatch(fetchStart());
    axiosAuthorization()
      .put("/profile", profileEdits, user_id)
      .then((profile) => dispatch(setProfile(profile.data)))
      .catch((err) => dispatch(fetchError(err)));
  };
};
export const createUserProfile = (newProfile) => {
  return (dispatch) => {
    dispatch(fetchStart());
    axiosAuthorization()
      .post("/profile", newProfile)
      .then((profile) => dispatch(setProfile(profile.data)))
      .then(() => dispatch(unsetFirstTimeUser()))
      .catch((err) => dispatch(fetchError(err)));
  };
};
// RELATIONSHIPS -==-=-=--=-==--=-=-==--=-=-
export const getRelationships = (user_id) => {
  return (dispatch) => {
    dispatch(fetchStart());
    axiosAuthorization()
      .get(`/profile/${user_id}/relationships`)
      .then((relationships) => {
        dispatch(setRelationships(relationships));
      })
      .catch((err) => dispatch(fetchError(err)));
  };
};
export const addRelationship = (relationship) => {
  return (dispatch) => {
    dispatch(fetchStart());
    axiosAuthorization()
      .post("/profile/relationships", relationship)
      .then((newRelationship) => {
        console.log(newRelationship);
        dispatch(getRelationships());
      })
      .catch((err) => dispatch(fetchError(err)));
  };
};
export const updateRelationship = (relationship) => {
  return (dispatch) => {
    dispatch(fetchStart());
    axiosAuthorization()
      .post("/profile/relationships", relationship)
      .then((updatedRelationship) => {
        console.log(updatedRelationship);
        dispatch(getRelationships());
      })
      .catch((err) => dispatch(fetchError(err)));
  };
};
export const setRelationships = (relationships) => {
  return { type: SET_RELATIONSHIPS, payload: relationships };
};
export const loginComplete = () => {
  return { type: LOGIN_COMPLETE };
};
// USER MOVIES //
export const addUserMovie = (movie_id, user_id) => {
  return (dispatch) => {
    dispatch(fetchStart());
    axiosAuthorization()
      .post(`/profile/movies`, {
        movie_id,
        user_id,
      })
      .then(() => {
        dispatch(getUserMovies(user_id));
      })
      .catch((err) => console.log(err));
  };
};
export const getUserMovies = (user_id) => {
  return (dispatch) => {
    dispatch(fetchStart());
    dispatch(clearUserMovieList());
    axiosAuthorization()
      .get(`/profile/${user_id}/movies`)
      .then((movies) => {
        movies.data.forEach((movie) => {
          dispatch(findUserContentById(movie.movie_id, "movie"));
        });
      })
      .catch((err) => console.log(err));
  };
};
export const clearUserMovieList = () => {
  return { type: CLEAR_USER_MOVIE_LIST };
};
export const setUserMovies = (movies) => {
  return { type: SET_USER_MOVIES, payload: movies };
};
export const deleteUserMovie = (content_id, user_id) => {
  return (dispatch) => {
    dispatch(fetchStart());
    axiosAuthorization()
      .delete("/profile/movies", {
        data: {
          movie_id: content_id,
          user_id: user_id,
        },
      })
      .then(() => {
        dispatch(getUserMovies(user_id));
      })
      .catch((err) => dispatch(fetchError(err)));
  };
};
// USER TV SHOWS //
export const addUserTvShow = (tv_show_id, user_id) => {
  return (dispatch) => {
    dispatch(fetchStart());
    axiosAuthorization()
      .post(`/profile/tv-shows`, {
        tv_show_id,
        user_id,
      })
      .then(() => dispatch(getUserTvShows(user_id)))
      .catch((err) => console.log(err));
  };
};
export const getUserTvShows = (user_id) => {
  return (dispatch) => {
    dispatch(fetchStart());
    dispatch(clearUserTvShowList());
    axiosAuthorization()
      .get(`/profile/${user_id}/tv-shows`)
      .then((tvShows) => {
        tvShows.data.forEach((tvShow) => {
          dispatch(findUserContentById(tvShow.tv_show_id, "tv"));
        });
      })
      .catch((err) => console.log(err));
  };
};
export const clearUserTvShowList = () => {
  return { type: CLEAR_USER_TV_LIST };
};
export const setUserTvShows = (tvShows) => {
  return { type: SET_USER_TV_SHOWS, payload: tvShows };
};
export const deleteUserTvShow = (content_id, user_id) => {
  return (dispatch) => {
    dispatch(fetchStart());
    axiosAuthorization()
      .delete("/profile/tv-shows", {
        data: {
          tv_show_id: content_id,
          user_id: user_id,
        },
      })
      .then(() => {
        dispatch(getUserTvShows(user_id));
      })
      .catch((err) => dispatch(fetchError(err)));
  };
};
export const findUserContentById = (id, type) => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get(`${BASE_URL}/3/${type}/${id}?api_key=${API_KEY}`)
      .then((userContent) => {
        type === "movie"
          ? dispatch(addUserMovieContent(userContent.data))
          : dispatch(addUserTvContent(userContent.data));
      })
      .catch((err) => dispatch(fetchError(err)));
  };
};
export const addUserMovieContent = (movie) => {
  return { type: ADD_USER_MOVIE_CONTENT, payload: movie };
};
export const addUserTvContent = (tvShow) => {
  return { type: ADD_USER_TV_CONTENT, payload: tvShow };
};
export const fetchStart = () => {
  return { type: FETCH_START };
};
export const fetchError = (error) => {
  return { type: FETCH_ERROR, payload: error };
};
export const fetchingComplete = () => {
  return { type: FETCHING_COMPLETE };
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
