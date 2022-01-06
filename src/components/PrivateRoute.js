import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

function PrivateRoute({ children, redirectTo, user }) {
    let authorized = false;
    const token = localStorage.getItem("token");
    if (token === user.token) {
        authorized = true;
    }
    return authorized ? children : <Navigate to={redirectTo}/>
}

const mapStateToProps = (state) => ({ user: state.user })
export default connect(mapStateToProps)(PrivateRoute);