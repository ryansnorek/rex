import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { logoutUser } from "../actions";

function Header({ auth, dispatch }) {
  const navigate = useNavigate();
  const home = "../../images/home.png";
  const search = "../../images/magnifier.png";
  const friends = "../../images/friends.png";
  const user = "../../images/user.png";
  return (
    <header>
      <h1 className="logo" onClick={() => navigate("/")}>
        Rexy
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">
              {<img className="icon" src={home} alt="home" />}
            </Link>
          </li>
          <li>
            <Link to="/search">
              {
                <img
                  className="icon"
                  src={search}
                  alt="search"
                />
              }
            </Link>
          </li>
          <li>
            <Link to="/users">
              {
                <img
                  className="icon"
                  src={friends}
                  alt="users"
                />
              }
            </Link>
          </li>
          <li>
            <Link to="/account">
              {
                <img
                  className="icon"
                  src={user}
                  alt="user-account"
                />
              }
            </Link>
          </li>
          {auth.authorized && (
            <li>
              <Link to="/">
                <p className="logout" onClick={() => dispatch(logoutUser())}>
                  Logout
                </p>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
const mapStateToProps = (state) => ({ auth: state.auth });
export default connect(mapStateToProps)(Header);
