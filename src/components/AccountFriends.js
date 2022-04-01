import { connect } from "react-redux";
import {
  addRelationship,
  updateRelationship,
  addRelativeRelationship,
  getRelationships,
} from "../actions";
import User from "./common/User";
import { createRelationship } from "../helper";
import { useEffect } from "react";

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

  // useEffect(() => {
  //   return () => dispatch(getRelationships(user_id));
  // },[dispatch, user_id])

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
