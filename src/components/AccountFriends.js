import { connect } from "react-redux";
import { addRelationship, updateRelationship } from "../actions";
import User from "./common/User";

function AccountFriends({ friends, type, user, dispatch }) {
  const { user_id } = user;
  const followUser = (relative_user_id) => {
    dispatch(
      addRelationship({
        user_id,
        relative_user_id,
        following: 1,
      })
    );
  };
  const unfollowUser = (relative_user_id) => {
    dispatch(
      updateRelationship({
        user_id,
        relative_user_id,
        following: 0,
      })
    );
  };
  return (
    <div className="friends">
      {friends &&
        friends.map((friend) => {
          return (
            <User
              key={friend.user_id}
              user={friend}
              type={type}
              followUser={followUser}
              unfollowUser={unfollowUser}
            />
          );
        })}
    </div>
  );
}
const mapStateToProps = (state) => {
  return { user: state.user };
};
export default connect(mapStateToProps)(AccountFriends);
