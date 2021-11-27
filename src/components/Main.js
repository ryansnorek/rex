import axiosAuthorization from "../utils";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../config";
import Item from "./Item";

export default function Main() {
    const [query, setQuery] = useState(null);
    const [queryResults, setQueryResults] = useState([]);
    const [category, setCategory] = useState("movie");

    useEffect(() => {
       axios.get(`https://api.themoviedb.org/3/search/${category}?api_key=${API_KEY}&query=${query}&`)
        .then(res => setQueryResults(res.data.results))
        .catch(err => console.log(err))
    },[query, category])

    const handleQueryChange = e => setQuery(e.target.value);
    const handleSelectCategory = e => setCategory(e.target.value);
    console.log(queryResults)

    return (
        <div className="search">
            <form>
                <input 
                    type="text"
                    name="search"
                    placeholder="Rexy search"
                    value={query}
                    onChange={handleQueryChange}
                />
                <select onChange={handleSelectCategory}>
                    <option value="movie">Movies</option>
                    <option value="tv">TV Shows</option>
                </select>
            </form>
            <div className="results">
                {query && queryResults.map(movie => <Item item={movie} category={category}/> )}
            </div>
        </div>
    )
}