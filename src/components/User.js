import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getFriendContent, setFriend } from "../actions";

function User({ user, dispatch, handleAddFriend }) {
  const navigate = useNavigate();

  const handleClickUser = async () => {
    dispatch(setFriend(user));
    return await Promise.resolve(dispatch(getFriendContent(user.user_id)));
  };

  return (
    <div className="friend">
      <div
        className="pic"
        onClick={() => handleClickUser().then(navigate("/userview"))}
      >
        <img src={`${user.uploaded_image}`} alt="profile-pic" />
        <h3>{user.display_name || user.username}</h3>
      </div>
      <div className="button-container">
        <button
          className="round-button"
          onClick={() => handleAddFriend(user.user_id)}
        >
          Follow
        </button>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    friendContentList: state.friendContentList,
  };
};
export default connect(mapStateToProps)(User);
