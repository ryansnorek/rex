import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState({ username:"", password:"" });

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    };
    const handleClick = () => {
        localStorage.setItem("token", 420);
        navigate("/account");
    };
    return (
        <div className="login page">
            <form onSubmit={handleSubmit}>
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
                <button onClick={handleClick}>Login</button>
            </form>
        </div>
    )
}