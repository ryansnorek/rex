import axios from "axios";
import axiosAuthorization from "../utils";
import { API_KEY } from "../config";
import { BASE_URL, BACKEND_URL } from "../constants";

export const FETCH_START = "FETCH_START";
export const FETCH_ERROR = "FETCH_ERROR";
export const FETCHING_COMPLETE = "FETCHING_COMPLETE";

export const SET_QUERY_RESULTS = "SET_QUERY_RESULTS";
export const SET_USER_MOVIES = "SET_USER_MOVIES";
export const SET_USER_TV_SHOWS = "SET_USER_TV_SHOWS";
export const SET_FOLLOWER = "SET_FOLLOWER";
export const SET_FOLLOWING = "SET_FOLLOWING";
export const CLEAR_RELATIONSHIPS = "CLEAR_RELATIONSHIPS";
export const SET_BLOCKED_USERS = "SET_BLOCKED_USERS";

export const DELETE_REXY = "DELETE_REXY";
export const FIND_REXY_MOVIE = "FIND_REXY_MOVIE";

export const SET_ITEM_MOVIE = "SET_ITEM_MOVIE";
export const SET_ITEM_TV_SHOW = "SET_ITEM_TV_SHOW";
export const UNSET_ITEM = "UNSET_ITEM";

export const SET_FRIEND = "SET_FRIEND";
export const ADD_FRIEND_MOVIE_CONTENT = "ADD_FRIEND_MOVIE_CONTENT";
export const ADD_FRIEND_TV_CONTENT = "ADD_FRIEND_TV_CONTENT";
export const CLEAR_FRIEND_MOVIE_LIST = "CLEAR_FRIEND_MOVIE_LIST";
export const CLEAR_FRIEND_TV_LIST = "CLEAR_FRIEND_TV_LIST";

export const SET_DISCOVER_TRENDING = "SET_DISCOVER_TRENDING";
export const SET_DISCOVER_MOVIES = "SET_DISCOVER_MOVIES";
export const SET_DISCOVER_TV_SHOWS = "SET_DISCOVER_TV_SHOWS";
export const DISCOVER_MOVIE = "DISCOVER_MOVIE";
export const DISCOVER_TV = "DISCOVER_TV";
export const TRENDING = "TRENDING";

export const SET_FIRST_TIME_USER = "SET_FIRST_TIME_USER";
export const UNSET_FIRST_TIME_USER = "UNSET_FIRST_TIME_USER";
export const AUTHORIZE_USER = "AUTHORIZE_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const LOGIN_COMPLETE = "LOGIN_COMPLETE";
export const SET_USER = "SET_USER";

export const ADD_WATCHLIST_MOVIE_CONTENT = "ADD_WATCHLIST_MOVIE_CONTENT";
export const ADD_WATCHLIST_SHOW_CONTENT = "ADD_WATCHLIST_SHOW_CONTENT";
export const CLEAR_WATCHLIST_MOVIE_LIST = "CLEAR_WATCHLIST_MOVIE_LIST";
export const CLEAR_WATCHLIST_SHOW_LIST = "CLEAR_WATCHLIST_SHOW_LIST";
export const REMOVE_WATCHLIST_MOVIE_CONTENT = "REMOVE_WATCHLIST_MOVIE_CONTENT";
export const REMOVE_WATCHLIST_SHOW_CONTENT = "REMOVE_WATCHLIST_SHOW_CONTENT";

export const fetchStart = () => {
  return { type: FETCH_START };
};
export const fetchError = (error) => {
  return { type: FETCH_ERROR, payload: error };
};
export const fetchingComplete = () => {
  return { type: FETCHING_COMPLETE };
};
export const setQueryResults = (queryResults) => {
  return { type: SET_QUERY_RESULTS, payload: queryResults };
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
export const setFriend = (friend) => {
  return { type: SET_FRIEND, payload: friend };
};
export const addFriendMovieContent = (movie) => {
  return { type: ADD_FRIEND_MOVIE_CONTENT, payload: movie };
};
export const clearFriendMovieList = () => {
  return { type: CLEAR_FRIEND_MOVIE_LIST };
};
export const addFriendTvContent = (shows) => {
  return { type: ADD_FRIEND_TV_CONTENT, payload: shows };
};
export const clearFriendTvList = () => {
  return { type: CLEAR_FRIEND_TV_LIST };
};
export const setDiscoverTrending = (trending) => {
  return { type: SET_DISCOVER_TRENDING, payload: trending };
};
export const setDiscoverMovies = (movies) => {
  return { type: SET_DISCOVER_MOVIES, payload: movies };
};
export const setDiscoverTvShows = (shows) => {
  return { type: SET_DISCOVER_TV_SHOWS, payload: shows };
};
export const logoutUser = () => {
  return { type: LOGOUT_USER };
};
export const setFirstTimeUser = () => {
  return { type: SET_FIRST_TIME_USER };
};
export const unsetFirstTimeUser = () => {
  return { type: UNSET_FIRST_TIME_USER };
};
export const authorizeUser = (auth) => {
  return { type: AUTHORIZE_USER, payload: auth };
};
export const setUser = (user) => {
  return { type: SET_USER, payload: user };
};
export const loginComplete = () => {
  return { type: LOGIN_COMPLETE };
};
export const setFollower = (profile) => {
  return { type: SET_FOLLOWER, payload: profile };
};
export const setFollowing = (profile) => {
  return { type: SET_FOLLOWING, payload: profile };
};
export const setBlockedUsers = (blocked_users) => {
  return { type: SET_BLOCKED_USERS, payload: blocked_users };
};
export const clearRelationshipsState = () => {
  return { type: CLEAR_RELATIONSHIPS };
};
export const clearUserMovieList = () => {
  return { type: CLEAR_WATCHLIST_MOVIE_LIST };
};
export const setUserMovies = (movies) => {
  return { type: SET_USER_MOVIES, payload: movies };
};
export const clearUserTvShowList = () => {
  return { type: CLEAR_WATCHLIST_SHOW_LIST };
};
export const setUserTvShows = (shows) => {
  return { type: SET_USER_TV_SHOWS, payload: shows };
};
export const addWatchlistMovieContent = (movie) => {
  return { type: ADD_WATCHLIST_MOVIE_CONTENT, payload: movie };
};
export const addWatchlistShowContent = (show) => {
  return { type: ADD_WATCHLIST_SHOW_CONTENT, payload: show };
};
export const removeWatchlistMovieContent = (movie_id) => {
  return { type: REMOVE_WATCHLIST_MOVIE_CONTENT, payload: movie_id };
};
export const removeWatchlistShowContent = (show_id) => {
  return { type: REMOVE_WATCHLIST_SHOW_CONTENT, payload: show_id };
};
export const discoverMovieList = (movies) => {
  return { type: DISCOVER_MOVIE, payload: movies };
};
export const discoverTvList = (shows) => {
  return { type: DISCOVER_TV, payload: shows };
};
export const trendingList = (trending) => {
  return { type: TRENDING, payload: trending };
};

// SEARCH -=-==-=--=-=-==-=-=-=-=--==-=--
export const getQueryResults = (type, query) => {
  return (dispatch) => {
    dispatch(fetchStart());
    if (type === "users") {
      axiosAuthorization()
        .get(`users/username/${query}`)
        .then((users) => dispatch(setQueryResults(users.data)))
        .catch((err) => dispatch(fetchError(err)))
        .finally(() => dispatch(fetchingComplete()));
    } else {
      axios
        .get(`${BASE_URL}/3/search/${type}?api_key=${API_KEY}&query=${query}`)
        .then((content) => dispatch(setQueryResults(content.data.results)))
        .catch((err) => dispatch(fetchError(err)))
        .finally(() => dispatch(fetchingComplete()));
    }
  };
};
// CONTENT -=-=-=-==--=-==--=-=-=-=
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
      .catch((err) => dispatch(fetchError(err)))
      .finally(() => dispatch(fetchingComplete()));
  };
};
export const getFriendContent = (user_id) => {
  return (dispatch) => {
    dispatch(fetchStart());
    dispatch(clearFriendMovieList());
    axiosAuthorization()
      .get(`content/${user_id}/movies/watchlist`)
      .then((movies) => {
        movies.data.forEach((movie) => {
          dispatch(findFriendContentById(movie.movie_id, "movie"));
        });
      })
      .catch((err) => dispatch(fetchError(err)));
    dispatch(clearFriendTvList());
    axiosAuthorization()
      .get(`content/${user_id}/shows/watchlist`)
      .then((shows) => {
        shows.data.forEach((show) => {
          dispatch(findFriendContentById(show.show_id, "tv"));
        });
      })
      .catch((err) => dispatch(fetchError(err)))
      .finally(() => dispatch(fetchingComplete()));
  };
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
      .catch((err) => dispatch(fetchError(err)))
      .finally(() => dispatch(fetchingComplete()));
  };
};
export const discoverContent = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get(`${BASE_URL}/3/trending/all/day?api_key=${API_KEY}`)
      .then((content) => dispatch(setDiscoverTrending(content.data.results)))
      .catch((err) => dispatch(fetchError(err)));
    axios
      .get(
        `${BASE_URL}/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`
      )
      .then((content) => dispatch(setDiscoverMovies(content.data.results)))
      .catch((err) => dispatch(fetchError(err)));
    axios
      .get(
        `${BASE_URL}/3/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc`
      )
      .then((content) => dispatch(setDiscoverTvShows(content.data.results)))
      .catch((err) => dispatch(fetchError(err)))
      .finally(() => dispatch(fetchingComplete()));
  };
};
// USER -==--=-==--==-=-=-=--==--==-//
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
      .catch((err) => dispatch(fetchError(err)))
      .finally(() => dispatch(fetchingComplete()));
  };
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
        dispatch(getWatchlistMovies(data.user_id));
        return data;
      })
      .then((data) => {
        dispatch(getWatchlistShows(data.user_id));
        return data;
      })
      .then((data) => {
        dispatch(getRelationships(data.user_id));
        return data;
      })
      .then(() => dispatch(loginComplete()))
      .catch((err) => dispatch(fetchError(err)))
      .finally(() => dispatch(fetchingComplete()));
  };
};
export const getUser = (data) => {
  return (dispatch) => {
    dispatch(fetchStart());
    axiosAuthorization()
      .get(`/users/${data.user_id}`)
      .then((user) => {
        dispatch(setUser(user.data));
      })
      .catch((err) => fetchError(err))
      .finally(() => dispatch(fetchingComplete()));
  };
};
export const updateUser = (updatedUser, user_id) => {
  return (dispatch) => {
    dispatch(fetchStart());
    axiosAuthorization()
      .put(`/users/${user_id}`, updatedUser)
      .then((user) => dispatch(setUser(user.data)))
      .catch((err) => dispatch(fetchError(err)))
      .finally(() => dispatch(fetchingComplete()));
  };
};
// RELATIONSHIPS -==-=-=--=-==--=-=-==--=-=-
export const setRelationships = (relationship) => {
  const { relative_user_id, follower, following, blocked } = relationship;
  return (dispatch) => {
    dispatch(fetchStart());
    axiosAuthorization()
      .get(`/users/${relative_user_id}`)
      .then((user) => {
        follower && dispatch(setFollower(user.data));
        following && dispatch(setFollowing(user.data));
        blocked && dispatch(setBlockedUsers(relative_user_id));
      })
      .catch((err) => dispatch(fetchError(err)))
      .finally(() => dispatch(fetchingComplete()));
  };
};
export const getRelationships = (user_id) => {
  return (dispatch) => {
    dispatch(fetchStart());
    dispatch(clearRelationshipsState());
    axiosAuthorization()
      .get(`/relationships/${user_id}`)
      .then((relationships) => {
        relationships.data.forEach((relationship) => {
          dispatch(setRelationships(relationship));
        });
      })
      .catch((err) => dispatch(fetchError(err)))
      .finally(() => dispatch(fetchingComplete()));
  };
};
export const handleRelativeRelationship = (relationship) => {
  const { relative_user_id, user_id } = relationship;
  const relativeRelationship = {
    user_id: relative_user_id,
    relative_user_id: user_id,
    follower: 1,
  };
  return (dispatch) => {
    axiosAuthorization()
      .post(`/relationships`, relativeRelationship)
      .then(() => {
        console.log("success");
      })
      .catch((err) => {
        // if (err.response.status === 403) {
          dispatch(updateRelativeRelationship(relativeRelationship));
        // }
        dispatch(fetchError(err));
      });
  };
};
export const addRelationship = (relationship) => {
  return (dispatch) => {
    dispatch(fetchStart());
    axiosAuthorization()
      .post("/relationships", relationship)
      .then(() => {
        dispatch(getRelationships(relationship.user_id));
      })
      .then(() => {
        dispatch(handleRelativeRelationship(relationship))
      })
      .catch((err) => {
        if (err.response.status === 403) {
          dispatch(updateRelationship(relationship));
        }
        dispatch(fetchError(err));
      })
      .finally(() => dispatch(fetchingComplete()));
  };
};
export const updateRelationship = (relationship) => {
  return (dispatch) => {
    dispatch(fetchStart());
    axiosAuthorization()
      .put("/relationships", relationship)
      .then(() => {
        dispatch(getRelationships(relationship.user_id));
      })
      .catch((err) => dispatch(fetchError(err)))
      .finally(() => dispatch(fetchingComplete()));
  };
};
export const addRelativeRelationship = (relationship) => {
  axiosAuthorization()
    .post("/relationships", relationship)
    .then(() => console.log("success"))
    .catch((err) => console.log(err));
};
export const updateRelativeRelationship = (relationship) => {
  axiosAuthorization()
    .put("/relationships", relationship)
    .then(() => console.log("success"))
    .catch((err) => console.log(err));
};
// WATCHLIST //
export const addWatchlistMovie = (movie_id, user_id) => {
  return (dispatch) => {
    axiosAuthorization()
      .post(`/content/movies/watchlist`, {
        movie_id,
        user_id,
      })
      .then(() => {
        dispatch(getWatchlistMovies(user_id));
      })
      .catch((err) => dispatch(fetchError(err)));
  };
};
export const getWatchlistMovies = (user_id) => {
  return (dispatch) => {
    dispatch(fetchStart());
    dispatch(clearUserMovieList());
    axiosAuthorization()
      .get(`/content/${user_id}/movies/watchlist`)
      .then((movies) => {
        movies.data.forEach((movie) => {
          dispatch(findUserContentById(movie.movie_id, "movie"));
        });
      })
      .catch((err) => dispatch(fetchError(err)))
      .finally(() => dispatch(fetchingComplete()));
  };
};
export const deleteWatchlistMovie = (movie_id, user_id) => {
  return (dispatch) => {
    axiosAuthorization()
      .delete("/content/movies/watchlist", {
        data: {
          movie_id,
          user_id,
        },
      })
      .then(() => {
        dispatch(removeWatchlistMovieContent(movie_id));
      })
      .catch((err) => dispatch(fetchError(err)));
  };
};
export const addWatchlistShow = (show_id, user_id) => {
  return (dispatch) => {
    axiosAuthorization()
      .post(`/content/shows/watchlist`, {
        show_id,
        user_id,
      })
      .then(() => dispatch(getWatchlistShows(user_id)))
      .catch((err) => console.log(err));
  };
};
export const getWatchlistShows = (user_id) => {
  return (dispatch) => {
    dispatch(fetchStart());
    dispatch(clearUserTvShowList());
    axiosAuthorization()
      .get(`/content/${user_id}/shows/watchlist`)
      .then((shows) => {
        shows.data.forEach((show) => {
          dispatch(findUserContentById(show.show_id, "tv"));
        });
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(fetchingComplete()));
  };
};
export const deleteWatchlistShow = (show_id, user_id) => {
  return (dispatch) => {
    axiosAuthorization()
      .delete("/content/shows/watchlist", {
        data: {
          show_id,
          user_id,
        },
      })
      .then(() => {
        dispatch(removeWatchlistShowContent(show_id));
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
          ? dispatch(addWatchlistMovieContent(userContent.data))
          : dispatch(addWatchlistShowContent(userContent.data));
      })
      .catch((err) => dispatch(fetchError(err)))
      .finally(() => dispatch(fetchingComplete()));
  };
};
