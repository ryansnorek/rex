import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";

const initialValues = {
  username: "",
  password: "",
};

export default function Login() {
  const navigate = useNavigate();

  const [values, handleChange, clearForm] = useForm("login",initialValues);

  const handleSubmit = (e) => {
    clearForm(e);
    localStorage.setItem("token", 420);

    setTimeout(() => {
      navigate("/account");
    }, 1618);
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
