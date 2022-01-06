import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

function PrivateRoute({ children, redirectTo, auth }) {
    let authorized = false;
    const token = localStorage.getItem("token");
    if (token === auth.token) {
        authorized = true;
    }
    return authorized ? children : <Navigate to={redirectTo}/>
}

const mapStateToProps = (state) => ({ auth: state.auth })
export default connect(mapStateToProps)(PrivateRoute);