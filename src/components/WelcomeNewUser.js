import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { unsetFirstTimeUser, updateUser } from "../actions";
import { AVATARS } from "../constants";

function WelcomeNewUser({ user, dispatch }) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    const { user_id } = user;
    dispatch(updateUser({ uploaded_image: e.target.name }, user_id))
    dispatch(unsetFirstTimeUser());
    navigate("/");
  };
  return (
    <div className="page">
      <div className="edit-profile">
        <h2>Hey, {user.username}!</h2>
        <p>Select your avatar</p>
        <div className="avatars">
          {AVATARS.map((avatar) => {
            return (
              <img
                onClick={handleClick}
                className="avatar"
                name={avatar}
                src={avatar}
                alt="avatar"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({ user: state.user });
export default connect(mapStateToProps)(WelcomeNewUser);
