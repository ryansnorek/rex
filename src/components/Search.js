import { connect } from "react-redux";
import SearchItem from "./SearchItem";
import useSearch from "../hooks/useSearch";

function Search({ dispatch, data, isFetching }) {
  const [
      queryType, 
      query, 
      handleSelectQueryType, 
      handleQueryChange
    ] = useSearch(dispatch, "movie");

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
          <select onChange={handleSelectQueryType}>
            <option value="movie">Movies</option>
            <option value="tv">TV Shows</option>
          </select>
        </form>
      </div>
      <div className="results">
        {isFetching && query ? (
          <div className="loading-container">
            <div className="loading"></div>
          </div>
        ) : (
          query &&
          data.map((movie) => {
            return <SearchItem item={movie} queryType={queryType} />
          })
        )}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    data: state.data,
    discover: state.discover,
    isFetching: state.isFetching,
    errors: state.errors,
  };
};
export default connect(mapStateToProps)(Search);
