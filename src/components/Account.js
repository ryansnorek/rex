import { connect } from "react-redux";
import AccountProfile from "./AccountProfile";
import AccountRexy from "./AccountRexy";
import WelcomeNewUser from "./WelcomeNewUser";

function Account({ user, userContentList, isFetching, firstTimeUser, dispatch }) {
  const { movies, tvShows } = userContentList;

  if (isFetching) {
    return (
      <div className="loading-container">
        <div className="loading"></div>
      </div>
    );
  }
  if (firstTimeUser) {
    return (
      <WelcomeNewUser user={user} dispatch={dispatch}/>
    )
  }
  return (
    <div className="account page">
      <AccountProfile />
      <div className="rexys">
        <h2>Movies</h2>
        {movies &&
          movies.map((item) => {
            return <AccountRexy key={item.id} item={item} type={"movie"} />;
          })}
        <h2>Tv Shows</h2>
        {tvShows &&
          tvShows.map((item) => {
            return <AccountRexy key={item.id} item={item} type={"tvShow"} />;
          })}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    userContent: state.userContent,
    userContentList: state.userContentList,
    isFetching: state.isFetching,
    firstTimeUser: state.firstTimeUser,
  };
};
export default connect(mapStateToProps)(Account);
