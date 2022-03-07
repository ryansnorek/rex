import { connect } from "react-redux";
import {
  addRelationship,
  updateRelationship,
  addRelativeRelationship,
} from "../actions";
import User from "./common/User";

const createRelationship = (user_id, relative_user_id, controller) => {
  let relationship, relativeRelationship;

  if (controller === "follow") {
    relationship = {
      user_id,
      relative_user_id,
      following: 1,
    };
    relativeRelationship = {
      user_id: relative_user_id,
      relative_user_id: user_id,
      follower: 1,
    };
  } else if (controller === "unfollow") {
    relationship = {
      user_id,
      relative_user_id,
      following: 0,
    };
    relativeRelationship = {
      user_id: relative_user_id,
      relative_user_id: user_id,
      follower: 0,
    };
  }
  return [relationship, relativeRelationship];
};

function AccountFriends({ friends, type, user, dispatch }) {
  const { user_id } = user;

  const followUser = (relative_user_id) => {
    const [relationship, relativeRelationship] = createRelationship(
      user_id,
      relative_user_id,
      "follow"
    );
    dispatch(addRelationship(relationship));
    dispatch(addRelativeRelationship(relativeRelationship));
  };
  const unfollowUser = (relative_user_id) => {
    const [relationship, relativeRelationship] = createRelationship(
      user_id,
      relative_user_id,
      "unfollow"
    );
    dispatch(updateRelationship(relationship));
    dispatch(addRelativeRelationship(relativeRelationship));
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
