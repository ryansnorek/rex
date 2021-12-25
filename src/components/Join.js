import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";

const initialValues = {
  username: "",
  password: "",
  email: "",
  phone: "",
};

export default function Join() {
  const navigate = useNavigate();

  const [values, handleChange, clearForm] = useForm(initialValues);

  const handleSubmit = (e) => {
    clearForm(e);
    // localStorage.setItem("token", 420);

    setTimeout(() => {
    //   navigate("/account");
    }, 1618);
  };
  return (
    <div className="login join page">
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
             <input
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            />
             <input
            type="phone"
            name="phone"
            placeholder="Phone"
            value={values.phone}
            onChange={handleChange}
            />
          </div>
        <button>Join</button>
        {/* <div className="join">
        <Link 
            to="/join"
            ><button>Join</button>
        </Link>
        </div> */}
      </form>
    </div>
  );
}