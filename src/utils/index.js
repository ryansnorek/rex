import axios from "axios";
import { API_TOKEN } from "../config";

export default function axiosAuthorization() {
    return axios.create({
        baseURL: "https://api.themoviedb.org",
        headers: { 
            authorization: `Bearer ${API_TOKEN}`
        }
    })
}