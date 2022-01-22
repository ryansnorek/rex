import { connect } from "react-redux";
import { followUser } from "../actions";
import Friend from "./Friend";
import useSearch from "../hooks/useSearch";

function Friends({ dispatch, queryResults, isFetching, user }) {
  const [queryType, query, handleSelectQueryType, handleQueryChange] =
    useSearch(dispatch, "users");

  const { user_id } = user;

  const handleAddFriend = (relative_user_id) => {
    if (!user_id) {
      return alert("login to add friend");
    }
    else if (user_id === relative_user_id) {
      return alert("that's you");
    }
    dispatch(followUser({
      user_id, 
      relative_user_id,
      following: 1
    }));
  };
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
            return <Friend user={result} handleAddFriend={handleAddFriend} />;
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
});
export default connect(mapStateToProps)(Friends);
