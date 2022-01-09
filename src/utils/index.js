import axios from "axios";
import { BACKEND_URL } from "../constants";

export default function axiosAuthorization() {
    const token = localStorage.getItem("token");
    return axios.create({
        baseURL: BACKEND_URL,
        headers: { 
            authorization: token
        }
    })
}