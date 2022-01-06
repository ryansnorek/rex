import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";
// import { loginUser } from "../helper";
import { loginUser } from "../actions";

const initialValues = {
  username: "",
  password: "",
};

function Login({ dispatch, user, isFetching }) {
  const navigate = useNavigate();
  const [values, handleChange, clearForm] = useForm("login", initialValues);

  const handleSubmit = async (e) => {
    dispatch(loginUser(values));
    clearForm(e);
  };
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
        <button>Login</button>
        <div className="join-btn">
        <Link 
            to="/join"
            ><button>Join</button>
        </Link>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({ user: state.user, isFetching: state.isFetching })
export default connect(mapStateToProps)(Login)