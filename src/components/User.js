import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getFriendContent } from "../actions";

function User({ user, friendContentList, dispatch, handleAddFriend }) {
  const navigate = useNavigate();

  const handleClickUser = () => {
    dispatch(getFriendContent(user.user_id));
  };
  
  if (friendContentList.movies && friendContentList.tvShows) {
    navigate("/userview");
  }
  return (
    <div className="friend" onClick={handleClickUser}>
      <div className="pic">
        <img src="../../images/blank_user.png" alt="profile-pic" />
        <h3>{user.display_name || user.username}</h3>
      </div>
      {/* <div className="text">
      </div> */}
         <img
          className="icon"
          onClick={() => handleAddFriend(user.user_id)}
          src="../../images/add_friend.png"
          alt="close"
        />
    </div>
  );
}
const mapStateToProps = (state) => {
    return ({
        friendContentList: state.friendContentList
    })
}
export default connect(mapStateToProps)(User);
