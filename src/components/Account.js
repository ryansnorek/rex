import { connect } from "react-redux";
import AccountProfile from "./AccountProfile";
import AccountRexy from "./AccountRexy";

function Account({ userContent }) {
  const { movies, tvShows } = userContent;

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
