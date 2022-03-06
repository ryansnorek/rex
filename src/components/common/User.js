import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getFriendContent, setFriend } from "../../actions";

function User({
  Component,
  user,
  type,
  followUser,
  unfollowUser,
  sendRexy,
  relationships,
  dispatch,
}) {
  const navigate = useNavigate();
  const isFollowingUser = relationships.following.find(
    (rel) => rel.user_id === user.user_id
  );
  const buttonLabel = type === "following" ? "Unfollow" : "Follow";
  const handleClick = type === "following" ? unfollowUser : followUser;
  const handleClickUser = async () => {
    dispatch(setFriend(user));
    return await Promise.resolve(dispatch(getFriendContent(user.user_id)));
  };
  return (
    <div className="user-component">
      <div className="left">
        <img
          src={`${user.uploaded_image}`}
          alt="profile-pic"
          onClick={() => handleClickUser().then(navigate("/userview"))}
        />
        <div className="name">
          <h3>{user.display_name}</h3>
          <p>@{user.username}</p>
        </div>
      </div>
      <div className="right">
        {/* Component */}
        {!isFollowingUser && (
          <div className="button-container">
            <button
              className="round-button"
              onClick={() => handleClick(user.user_id)}
            >
              {buttonLabel}
            </button>
          </div>
        )}
        {type === "following" && (
          <div className="button-container">
            <button
              className="unfollow"
              onClick={() => handleClick(user.user_id)}
            >
              {buttonLabel}
            </button>
          </div>
        )} 
        {type === "sendRexy" && (
          <div className="button-container">
            <button
              className="round-button"
              // onClick={() => sendRexy(user.user_id)}
            >
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  relationships: state.relationships,
});
export default connect(mapStateToProps)(User);
