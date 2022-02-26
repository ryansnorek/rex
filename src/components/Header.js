import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <h1 className="logo" onClick={() => navigate("/")}>
        Rexy
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">
              {
                <img
                  className="icon"
                  src="../../images/home.png"
                  alt="home"
                />
              }
            </Link>
          </li>
          <li>
            <Link to="/search">
              {
                <img
                  className="icon"
                  src="../../images/magnifier.png"
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
                  src="../../images/friends.png"
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
                  src="../../images/user.png"
                  alt="user-account"
                />
              }
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
