import { connect } from "react-redux";
import { unsetFirstTimeUser, updateUser } from "../actions";
import { AVATARS } from "../constants";

function AccountAvatar({ handleEdit, user, dispatch }) {
  const handleClick = (e) => {
    const { user_id } = user;
    dispatch(updateUser({ uploaded_image: e.target.name }, user_id))
    dispatch(unsetFirstTimeUser());
  };
  return (
      <div className="modal-wrapper">
        <div className="edit-modal">
        <nav>
          <img
            className="icon"
            onClick={handleEdit}
            src="../../images/close.png"
            alt="close"
          />
        </nav>
        <p>Select your avatar</p>
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
  );
}
const mapStateToProps = (state) => ({ user: state.user });
export default connect(mapStateToProps)(AccountAvatar);
