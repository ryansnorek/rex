import { connect } from "react-redux";
import AccountProfile from "./AccountProfile";
import AccountRexy from "./AccountRexy";
import useLoadContent from "../hooks/useLoadContent";

function Account({ userContent, dispatch, userContentList }) {
  const [movies, tvShows] = useLoadContent(
    userContent, 
    dispatch, 
    userContentList
    );

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
