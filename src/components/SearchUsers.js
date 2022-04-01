import { connect } from "react-redux";
import { addRelationship, addRelativeRelationship } from "../actions";
import { createRelationship } from "../helper";
import useSearch from "../hooks/useSearch";

import User from "./common/User";
import LoadingEllispis from "./common/LoadingEllipsis";

function SearchUsers({ dispatch, queryResults, isFetching, user }) {
  const [, query, , handleQueryChange] = useSearch("users");
  const { user_id } = user;
  
  const followUser = (relative_user_id) => {
    const [relationship, relativeRelationship] = createRelationship(
      user_id,
      relative_user_id,
      "follow"
    );
    dispatch(addRelationship(relationship));
    dispatch(addRelativeRelationship(relativeRelationship));
  };
  return (
    <div className="friend-search search page">
      <div className="nav-bar">
        <form>
          <input
            type="search"
            name="search"
            placeholder="Search users"
            value={query}
            onChange={handleQueryChange}
          />
        </form>
      </div>
      <div className="results">
        {isFetching && query ? (
          <div className="loading-wrapper">
            <LoadingEllispis />
          </div>
        ) : (
          queryResults.length > 0 &&
          queryResults[0].username !== null &&
          queryResults.map((result) => {
            return (
              <User
                key={result.user_id}
                user={result}
                followUser={followUser}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  user: state.user,
  queryResults: state.queryResults,
  isFetching: state.isFetching,
  relationships: state.relationships,
});
export default connect(mapStateToProps)(SearchUsers);
