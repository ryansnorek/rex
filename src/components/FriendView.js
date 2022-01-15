import { connect } from "react-redux";
import FriendContent from "./FriendContent";

function FriendView({ friendContentList }) {
  const { movies, tvShows } = friendContentList;

  return (
    <div className="page">
      <div className="rexys">
        <h2>Movies</h2>
        {movies &&
          movies.map((item) => {
            return <FriendContent key={item.id} item={item}/>;
          })}
        <h2>Tv Shows</h2>
        {tvShows &&
          tvShows.map((item) => {
            return <FriendContent key={item.id} item={item}/>;
          })}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    friendContentList: state.friendContentList,
  };
};
export default connect(mapStateToProps)(FriendView);
