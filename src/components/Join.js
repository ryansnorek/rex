import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import useInputMask from "../hooks/useInputMask";
import { registerNewUser } from "../actions";
import { connect } from "react-redux";

const initialValues = {
  username: "",
  password: "",
  email: "",
  phone: "",
};

function Join({ isFetching, loginComplete, dispatch }) {
  const navigate = useNavigate();
  const [values, handleChange, clearForm] = useForm("join", initialValues);
  const [phone, inputPhone, handlePhoneChange] = useInputMask();

  const handleSubmit = (e) => {
    values.phone = phone;
    values.username = values.username.toLowerCase()
    values.email = values.email.toLowerCase()
    dispatch(registerNewUser(values));
    clearForm(e);
  };
  if (loginComplete) {
    navigate("/account");
  }
  if (isFetching) {
    return (
      <div className="loading-container">
        <div className="loading"></div>
      </div>
    );
  }
  return (
    <div className="login join page">
      <form onSubmit={handleSubmit}>
        <div className="top">
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            value={values.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={values.password}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={values.email}
            onChange={handleChange}
          />
          <input
            type="phone"
            name="phone"
            placeholder="Phone"
            required
            onChange={handlePhoneChange}
            ref={inputPhone}
          />
        </div>
        <button className="round-button">Join</button>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => {
  return ({
    isFetching: state.isFetching,
    loginComplete: state.loginComplete,
  })
}
export default connect(mapStateToProps)(Join);