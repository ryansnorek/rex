import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import useInputMask from "../hooks/useInputMask";
import { registerNewUser } from "../actions";
import { createNewUser } from "../helper";

import LoadingEllispis from "./common/LoadingEllipsis";

const initialValues = {
  username: "",
  password: "",
  email: "",
  phone: "",
};

function Join({ isFetching, loginComplete, dispatch, errors }) {
  const navigate = useNavigate();
  const [values, handleChange, clearForm] = useForm("join", initialValues);
  const [phone, inputPhone, handlePhoneChange] = useInputMask();

  const handleSubmit = (e) => {
    const newUser = createNewUser(values, phone);
    dispatch(registerNewUser(newUser));
    clearForm(e);
  };
  if (loginComplete) {
    navigate("/account");
  }
  if (isFetching) {
    return <LoadingEllispis />;
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
        {errors && <p className="error">{errors.response.data.message}</p>}
        <button className="round-button">Join</button>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    loginComplete: state.loginComplete,
    errors: state.errors,
  };
};
export default connect(mapStateToProps)(Join);
