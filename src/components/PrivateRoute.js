import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

function PrivateRoute({ children, redirectTo, auth }) {
    return auth.authorized ? children : <Navigate to={redirectTo}/>
}

const mapStateToProps = (state) => ({ auth: state.auth });
export default connect(mapStateToProps)(PrivateRoute);