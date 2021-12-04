import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getQueryResults, discoverMovies } from "../actions";
import { POSTER_URL } from "../constants";
import SearchItem from "./SearchItem";

function Search(props) {
    const { dispatch, data, discover, isFetching } = props;
    const [category, setCategory] = useState("movie");
    const [query, setQuery] = useState(null);

    useEffect(() => dispatch(discoverMovies()),[])
    useEffect(() => dispatch(getQueryResults(category, query)), [category, query]);

    const handleSelectCategory = e => setCategory(e.target.value);
    const handleQueryChange = e => setQuery(e.target.value);
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
            <div className="discover">
                {discover && !query && discover.map(movie => {
                    return (
                        <div className="discover-item">
                            {movie.poster_path ? <img src={`${POSTER_URL}${movie.poster_path}`} alt="poster"/> : <img src="../../images/unavailable_poster.jpeg" alt="poster" />}
                        </div>
                    )
                })}
            </div>
            <div className="results">
                {isFetching && query ?  
                <div className="loading-container">
                    <div className="loading"></div>
                </div> :
                query && data.map(movie => <SearchItem item={movie} category={category}/> )}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        data: state.data,
        discover: state.discover,
        isFetching: state.isFetching,
        errors: state.errors
    }
}
export default connect(mapStateToProps)(Search);