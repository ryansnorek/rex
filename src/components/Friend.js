import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getFriendContent } from "../actions";

function Friend({ user, friendContentList, dispatch }) {
  const navigate = useNavigate();

  const handleClickUser = () => {
    dispatch(getFriendContent(user.user_id));
  };
  if (friendContentList.movies && friendContentList.tvShows) {
    navigate("/friendview");
  }
  return (
    <div className="friend">
      <div className="pic" onClick={handleClickUser}>
        <img src="../../images/blank_user.png" alt="profile-pic" />
      </div>
      <div className="text" onClick={handleClickUser}>
        <h3>{user.username}</h3>
      </div>
      <div className="buttons-container">
        <button>Add friend</button>
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
