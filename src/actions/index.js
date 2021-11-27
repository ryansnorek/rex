import axios from "axios";
import { API_KEY } from "../config";

export const FETCH_START = "FETCH_START";
export const FETCH_QUERY = "FETCH_QUERY";

export const getQueryResults = (category, query) => {
    return (dispatch) => {

        dispatch(fetchStart())

        axios.get(`https://api.themoviedb.org/3/search/${category}?api_key=${API_KEY}&query=${query}&`)
            .then(res => dispatch(fetchQuery(res.data.results)))
            .catch(err => console.log(err))
    }
}

export const fetchStart = () => {
    return ({type: FETCH_START});
}
export const fetchQuery = (data) => {
    return ({type: FETCH_QUERY, payload: data});
}