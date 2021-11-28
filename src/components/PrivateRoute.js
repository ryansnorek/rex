import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children, redirectTo }) {
    const token = false;
    return token ? children : <Navigate to={redirectTo}/>
}