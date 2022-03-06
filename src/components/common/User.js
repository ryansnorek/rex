import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getFriendContent, setFriend } from "../../actions";

function User({ Component, user, dispatch }) {
  const navigate = useNavigate();
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
        <div className="button-container">
          <button className="round-button">Follow</button>
        </div>
      </div>
    </div>
  );
}
export default connect()(User);
