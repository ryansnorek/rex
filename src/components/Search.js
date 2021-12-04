import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getQueryResults, discoverMovies } from "../actions";
import { POSTER_URL } from "../constants";
import SearchItem from "./SearchItem";

function Search(props) {
    const { dispatch, data, discover, isFetching } = props;
    const [category, setCategory] = useState("movie");
    const [query, setQuery] = useState(null);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => dispatch(discoverMovies()),[])
    useEffect(() => dispatch(getQueryResults(category, query)), [category, query]);

    const handleScroll = () => {
        setScrolling(true);
        setTimeout(() => setScrolling(false), 2000);
    };
    const handleSelectCategory = e => setCategory(e.target.value);
    const handleQueryChange = e => setQuery(e.target.value);
    return (
        <div className="search" onScroll={handleScroll}>
            <div id={scrolling ? "scrolling" : "not-scrolling"}>
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
            </div>
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