import { connect } from "react-redux";
import { addRelationship } from "../actions";
import User from "./User";
import useSearch from "../hooks/useSearch";

function SearchUsers({ dispatch, queryResults, isFetching, user, relationships }) {
  const [, query, , handleQueryChange] = useSearch("users");
  const { following } = relationships;
  const { user_id } = user;

  const handleAddFriend = (relative_user_id) => {
    if (!user_id) {
      return alert("Login to add friend");
    } else if (user_id === relative_user_id) {
      return alert("That's you!");
    } else if (following.find((r) => r.user_id === relative_user_id)){
      return alert("Already following user");
    } else {
        dispatch(
          addRelationship({
            user_id,
            relative_user_id,
            following: 1,
          })
        );
      }
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
          <div className="loading-container">
            <div className="loading"></div>
          </div>
        ) : (
          query &&
          queryResults.map((result) => {
            return <User user={result} handleAddFriend={handleAddFriend} />;
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
