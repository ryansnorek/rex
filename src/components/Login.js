import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";
import { loginUser } from "../actions";
import { useEffect } from "react";

const initialValues = {
  username: "",
  password: "",
};

function Login({ dispatch, isFetching, loginComplete }) {
  const navigate = useNavigate();
  const [values, handleChange, clearForm] = useForm("login", initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(values));
    clearForm(e);
    // setTimeout(() => {
    //   navigate("/account");
    // }, 3000);
  };

  if (loginComplete) {
    console.log("----===--=-==--==--= navigate")
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
    <div className="login page">
      <form onSubmit={handleSubmit}>
        <div className="top">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={values.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <button className="round-button">Login</button>
        <div className="join-btn">
          <Link to="/join">
            <button>Join</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  isFetching: state.isFetching,
  loginComplete: state.loginComplete,
});
export default connect(mapStateToProps)(Login);
