import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import useInputMask from "../hooks/useInputMask";
import { registerNewUser } from "../helper";

const initialValues = {
  username: "",
  password: "",
  email: "",
  phone: "",
};

export default function Join() {
  const navigate = useNavigate();

  const [values, handleChange, clearForm] = useForm("join", initialValues);
  const [phone, inputPhone, handlePhoneChange] = useInputMask();

  const handleSubmit = (e) => {
    values.phone = phone;
    registerNewUser(values);
    clearForm(e);
    setTimeout(() => {
      navigate("/profile");
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
        <button>Join</button>
      </form>
    </div>
  );
}
