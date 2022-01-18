import { connect } from "react-redux";
import FriendContent from "./FriendContent";

function FriendView({ friend, friendContentList }) {
  const { movies, tvShows } = friendContentList;

  return (
    <div className="page friend-view">
      <div className="card">
        <div className="pic">
          <img src="../../images/blank_user.png" alt="profile-pic" />
          <h3>{friend.display_name}</h3>
        </div>
      </div>
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
    friend: state.friend,
    friendContentList: state.friendContentList,
  };
};
export default connect(mapStateToProps)(FriendView);
