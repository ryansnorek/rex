import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getFriendContent } from "../actions";

function Friend({ user, friendContentList, dispatch }) {
  const navigate = useNavigate();

  const handleClickUser = () => {
    dispatch(getFriendContent(user.user_id));
  };
  const handleAddFriend = () => {
    alert("feature unavailable");
  }
  if (friendContentList.movies && friendContentList.tvShows) {
    navigate("/friendview");
  }
  return (
    <div className="friend" onClick={handleClickUser}>
      <div className="pic">
        <img src="../../images/blank_user.png" alt="profile-pic" />
        <h3>{user.username}</h3>
      </div>
      {/* <div className="text">
        
      </div> */}
      <div className="buttons-container" onClick={handleAddFriend}>
        <button className="round-button">Add friend</button>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
    return ({
        friendContentList: state.friendContentList
    })
}
export default connect(mapStateToProps)(Friend);
