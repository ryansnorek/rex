import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { unsetFirstTimeUser } from "../actions";
import { AVATARS } from "../constants";

function WelcomeNewUser({ user, dispatch }) {
  const navigate = useNavigate();
  const handleClick = () => {
    // dispatch(unsetFirstTimeUser());
    // navigate("/");
  };
  return (
    <div className="page">
      <div className="edit-profile">
        <h2>Hey, {user.username}</h2>
        <p>Select your avatar</p>
        <div className="avatars">
          {AVATARS.map((avatar) => {
            return <img className="avatar" src={avatar} alt="avatar" />;
          })}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({ user: state.user });
export default connect(mapStateToProps)(WelcomeNewUser);
