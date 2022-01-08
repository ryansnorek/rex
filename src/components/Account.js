import { connect } from "react-redux";
import AccountProfile from "./AccountProfile";
import AccountRexy from "./AccountRexy";
import { useEffect } from "react";
import { loadUserContent } from "../helper";

function Account({ userContent, dispatch }) {
  const { movies, tvShows } = userContent;

  useEffect(() => {
    console.log("launching load-=-=-=====-=-=--==-=-")
    loadUserContent(userContent, dispatch)
  }, [])

  return (
    <div className="account page">
      <AccountProfile />
      <div className="rexys">
        <h2>Movies</h2>
        { movies && movies.map(item => <AccountRexy item={item} />) }
        <h2>Tv Shows</h2>
        { tvShows && tvShows.map(item => <AccountRexy item={item} />) }
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    userContent: state.userContent,
  };
};
export default connect(mapStateToProps)(Account);
