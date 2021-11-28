import { useState } from "react";

export default function Login() {
    const [values, setValues] = useState({ username:"", password:"" });
    const handleChange = e => setValues({ ...values, [e.target.name]: e.target.value });
    const handleSubmit = e => {
        e.preventDefault();
        console.log(values);
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="username"
                    placeholder="username"
                    value={values.username}
                    onChange={handleChange}
                />
                <input 
                    type="password"
                    name="password"
                    placeholder="password"
                    value={values.password}
                    onChange={handleChange}
                />
                <button>Login</button>
            </form>
        </div>
    )
}