import { connect } from "react-redux";
import AccountProfile from "./AccountProfile";
import AccountRexy from "./AccountRexy";
import { useEffect } from "react";
import { loadUserContent } from "../helper";

function Account({ userContent, dispatch, userContentList }) {
  const { movies, tvShows } = userContentList;

  useEffect(() => {
    if (movies.length === 0 && tvShows.length === 0) {
      loadUserContent(userContent, dispatch);
    }
  }, [userContent]);

  return (
    <div className="account page">
      <AccountProfile />
      <div className="rexys">
        <h2>Movies</h2>
        {movies && movies.map((item) => <AccountRexy item={item} />)}
        <h2>Tv Shows</h2>
        {tvShows && tvShows.map((item) => <AccountRexy item={item} />)}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    userContent: state.userContent,
    userContentList: state.userContentList,
  };
};
export default connect(mapStateToProps)(Account);
