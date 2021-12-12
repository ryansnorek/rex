import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getQueryResults } from "../actions";
import SearchItem from "./SearchItem";

function Search({ dispatch, data, isFetching }) {
    const [category, setCategory] = useState("movie");
    const [query, setQuery] = useState(null);

    useEffect(() => {
        dispatch(
            getQueryResults(category, query)
            )
    }, [category, query]);

    const handleSelectCategory = (e) => setCategory(e.target.value);
    const handleQueryChange = (e) => setQuery(e.target.value);
    
    return (
        <div className="search page">
            <div className="nav-bar">
                <form>
                    <input 
                        type="text"
                        name="search"
                        placeholder="search"
                        value={query}
                        onChange={handleQueryChange}
                    />
                    <select onChange={handleSelectCategory}>
                        <option value="movie">Movies</option>
                        <option value="tv">TV Shows</option>
                    </select>
                </form>
            </div>
            <div className="results">
                {
                isFetching && 
                query ?  
                <div className="loading-container">
                    <div className="loading"></div>
                </div> :
                query && 
                data.map(movie => <SearchItem item={movie} category={category}/> )
                }
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