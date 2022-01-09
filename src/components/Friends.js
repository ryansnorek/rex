import { connect } from "react-redux";
import Friend from "./Friend";
import useSearch from "../hooks/useSearch";

function Friends({ dispatch, queryResults, isFetching }) {
    const [
        queryType, 
        query, 
        handleSelectQueryType, 
        handleQueryChange
      ] = useSearch(dispatch, "users");

  return (
    <div className="friend-search search page">
      <div className="nav-bar">
        <form>
          <input
            type="text"
            name="search"
            placeholder="Search users"
            value={query}
            onChange={handleQueryChange}
          />
        </form>
      </div>
      <div className="results">
        {isFetching && query ? (
          <div className="loading-container">
            <div className="loading"></div>
          </div>
        ) : (
          query &&
          queryResults.map((result) => {
            return <Friend user={result} />
          })
        )}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({ 
    queryResults: state.queryResults,
    isFetching: state.isFetching 
});
export default connect(mapStateToProps)(Friends);
