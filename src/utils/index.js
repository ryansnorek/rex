import axios from "axios";
import { API_TOKEN } from "../config";
import { BASE_URL } from "../constants";

export default function axiosAuthorization() {
    return axios.create({
        baseURL: BASE_URL,
        headers: { 
            authorization: `Bearer ${API_TOKEN}`
        }
    })
}