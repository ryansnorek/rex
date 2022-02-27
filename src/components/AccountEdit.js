import { connect } from "react-redux";
import useForm from "../hooks/useForm";
import useInputMask from "../hooks/useInputMask";

const initialValues = {
  displayName: "",
  username: "",
  password: "",
  email: "",
  phone: "",
  profilePic: "",
};

function AccountEdit({ handleEdit, user, profile }) {
  const [values, handleChange, clearForm] = useForm("edit", initialValues);
  const [phone, inputPhone, handlePhoneChange] = useInputMask();
  const handleSubmit = (e) => {
    values.phone = phone;
    values.username = values.username.toLowerCase();
    values.email = values.email.toLowerCase();
    clearForm(e);
    handleEdit();
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
        <form onSubmit={handleSubmit}>
          <label>
            Display Name:
            <input
              type="text"
              name="displayName"
              placeholder={profile.display_name}
              value={values.displayName}
              onChange={handleChange}
            />
          </label>
          <label>
            Username:
            <input
              type="text"
              name="username"
              placeholder={user.username}
              value={values.username}
              onChange={handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              placeholder="***********"
              value={values.password}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="#####"
              value={values.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone:
            <input
              type="phone"
              name="phone"
              placeholder="######"
              onChange={handlePhoneChange}
              ref={inputPhone}
            />
          </label>
          <label>
            Profile Pic URL:
            <input
              type="text"
              name="profilePic"
              placeholder="######"
              value={values.profilePic}
              onChange={handleChange}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    profile: state.profile,
  };
};
export default connect(mapStateToProps)(AccountEdit);
