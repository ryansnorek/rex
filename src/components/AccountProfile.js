import { connect } from "react-redux";
import { useState } from "react";
import AccountEdit from "./AccountEdit";
import AccountAvatar from "./AccountAvatar";

function AccountProfile({ user }) {
  const [editAccount, setEditAccount] = useState(false);
  const [editProfilePic, setEditProfilePic] = useState(false);
  const handleEditAccount = () => setEditAccount(!editAccount);
  const handleEditProfilePic = () => setEditProfilePic(!editProfilePic);
  return (
    <>
      <div className="editor-wrapper">
        {editAccount && <AccountEdit handleEdit={handleEditAccount} />}
        {editProfilePic && <AccountAvatar handleEdit={handleEditProfilePic} />}
      </div>
      {
        !editAccount && !editProfilePic && (
<div className="profile">
        <div className="pic">
          <img
            onClick={handleEditProfilePic}
            src={`${user.uploaded_image}`}
            alt="profile-pic"
          />
        </div>
        <div className="text">
          <h3>{user.display_name}</h3>
          <h3>@{user.username}</h3>
        </div>
        <img
          className="icon"
          onClick={handleEditAccount}
          src="../../images/settings.png"
          alt="search"
        />
      </div>
        )
      }
    </>
  );
}
const mapStateToProps = (state) => ({ user: state.user });
export default connect(mapStateToProps)(AccountProfile);
