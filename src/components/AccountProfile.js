import { connect } from "react-redux";
import { useState } from "react";
import AccountEdit from "./AccountEdit";
// import { updateUserProfile } from "../actions";

function AccountProfile({ user, dispatch }) {
  const [editMode, setEditMode] = useState(false);
  const [input, setInput] = useState("");

  const handleEdit = () => {
    setEditMode(!editMode);
  };
  const handleChange = (e) => setInput(e.target.value);
  const handleChangePic = (e) => {
    e.preventDefault();
    setEditMode(false);
    // dispatch(updateUserProfile({ user_id: user.user_id, uploaded_image: e.target.value }))
  };
  return (
    <>
      {editMode && <AccountEdit handleEdit={handleEdit} />}
      <div className="profile">
        <div className="pic">
          <img src={`${user.uploaded_image}`} alt="profile-pic" />
        </div>
        <div className="text">
          <h3>{user.display_name}</h3>
          <h3>@{user.username}</h3>
        </div>
        <img
                  className="icon"
                  onClick={handleEdit}
                  src="../../images/settings.png"
                  alt="search"
                />
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  friends: state.friends,
  user: state.user,
});
export default connect(mapStateToProps)(AccountProfile);
