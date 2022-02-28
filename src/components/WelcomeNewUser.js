import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { unsetFirstTimeUser } from "../actions";

function WelcomeNewUser({ user, dispatch }) {
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(unsetFirstTimeUser());
    navigate("/");
  };
  return (
    <div className="page">
      <div className="edit-profile">
        <h2>Hey, {user.username}</h2>
        <p>Start adding content and find freiends to share them with</p>
        <button className="round-button" onClick={handleClick}>
          Okay!
        </button>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({ user: state.user });
export default connect(mapStateToProps)(WelcomeNewUser);
