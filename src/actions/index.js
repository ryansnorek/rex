import axios from "axios";
import { API_KEY } from "../config";
import { BASE_URL } from "../constants";

export const FETCH_START = "FETCH_START";
export const FETCH_QUERY = "FETCH_QUERY";
export const FETCH_ERROR = "FETCH_ERROR";
export const ADD_REXY = "ADD_REXY";
export const DELETE_REXY = "DELETE_REXY";
export const FIND_REXY_MOVIE = "FIND_REXY_MOVIE";
export const FIND_MOVIE = "FIND_MOVIE";
export const GET_FRIENDS = "GET_FRIENDS";
export const DISCOVER_MOVIE = "DISCOVER_MOVIE";
export const DISCOVER_TV = "DISCOVER_TV";

export const getQueryResults = (category, query) => {
    return (dispatch) => {
        dispatch(fetchStart());
        axios.get(`${BASE_URL}/3/search/${category}?api_key=${API_KEY}&query=${query}`)
            .then(res => dispatch(fetchQuery(res.data.results)))
            .catch(err => dispatch(fetchError(err)))
    };
}
export const findMovieById = (id, isRexy) => {
    return (dispatch) => {
        dispatch(fetchStart());
        axios.get(`${BASE_URL}/3/movie/${id}?api_key=${API_KEY}`)
            .then(res => dispatch(isRexy ? findRexyMovie(res.data) : findMovie(res.data)))
            .catch(err => dispatch(fetchError(err)))
    };
}
export const getFriends = () => {
    return (dispatch) => {
        dispatch(fetchStart());
        axios.get("https://randomuser.me/api/?results=10")
            .then(res => dispatch(friendsList(res.data.results)))
            .catch(err => dispatch(fetchError(err)))
    };
}
export const discoverContent = (type) => {
    return (dispatch) => {
        dispatch(fetchStart());
        axios.get(`${BASE_URL}/3/discover/${type}?api_key=${API_KEY}&sort_by=popularity.desc`)
            .then(res => dispatch(type === "movie" ? discoverMovieList(res.data.results) : discoverTvList(res.data.results) ))
            .catch(err => dispatch(fetchError(err)))
    };
}
export const fetchStart = () => {
    return ({ type: FETCH_START });
}
export const fetchQuery = (data) => {
    return ({ type: FETCH_QUERY, payload: data });
}
export const fetchError = (error) => {
    return ({ type: FETCH_ERROR, payload: error });
}
export const addRexy = (id) => {
    return ({ type: ADD_REXY, payload: id });
}
export const deleteRexy = (id) => {
    return ({ type: DELETE_REXY, payload: id });
}
export const findRexyMovie = (data) => {
    return ({ type: FIND_REXY_MOVIE, payload: data });
}
export const findMovie = (data) => {
    return ({ type: FIND_MOVIE, payload: data });
}
export const friendsList = (friends) => {
    return ({ type: GET_FRIENDS, payload: friends });
}
export const discoverMovieList = (data) => {
    return ({ type: DISCOVER_MOVIE, payload: data });
}
export const discoverTvList = (data) => {
    return ({ type: DISCOVER_TV, payload: data });
}