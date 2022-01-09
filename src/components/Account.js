import { connect } from "react-redux";
import AccountProfile from "./AccountProfile";
import AccountRexy from "./AccountRexy";
import useLoadContent from "../hooks/useLoadContent";
import { loadUserContent } from "../helper";
import { useEffect } from "react";

function Account({ userContent, dispatch, userContentList }) {
  // const [movies, tvShows] = useLoadContent(
  //   userContent,
  //   dispatch,
  //   userContentList
  // );
  const { movies, tvShows } = userContentList;
  useEffect(() => {
    if (movies.length === 0 && tvShows.length === 0) {
      loadUserContent(userContent, dispatch, userContentList);
    }
  }, [userContent]);

  return (
    <div className="account page">
      <AccountProfile />
      <div className="rexys">
        <h2>Movies</h2>
        {movies && movies.map((item) => {
          return <AccountRexy key={item.id} item={item} type={"movie"}/>
        })}
        <h2>Tv Shows</h2>
        {tvShows && tvShows.map((item) => {
          return <AccountRexy key={item.id} item={item} type={"tvShow"}/>
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
  };
};
export default connect(mapStateToProps)(Account);
