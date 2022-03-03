import User from "./User";
import { connect } from "react-redux";
import { addRelationship } from "../actions";

function AccountFriends({ friends, user, relationships, dispatch }) {
  const { user_id } = user;
  const { following } = relationships;
  const handleAddFriend = (relative_user_id) => {
    if (!user_id) {
      return alert("Login to add friend");
    } else if (user_id === relative_user_id) {
      return alert("That's you!");
    } else if (following.find((r) => r.user_id === relative_user_id)) {
      return alert("Already following user");
    } else {
      dispatch(
        addRelationship({
          user_id,
          relative_user_id,
          following: 1,
        })
      );
    }
  };
  return (
    <div className="friends">
      {friends &&
        friends.map((friend) => {
          return (
            <User
              key={friend.user_id}
              user={friend}
              handleAddFriend={handleAddFriend}
            />
          );
        })}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    relationships: state.relationships,
  };
};
export default connect(mapStateToProps)(AccountFriends);
