import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h1>Rexy</h1>
            <p>A place to share your recommendations</p>
            <nav>
                <div className="links">
                    <ul>
                        <li>
                            <Link to="/search">{<img className="icon" src="../../images/magnifier.png" alt="search"/>}</Link>
                        </li>
                        <li>
                            <Link to="/account">{<img className="icon" src="../../images/user.png" alt="user-account"/>}</Link>
                        </li>
                        <li>
                            <Link to="/login">{<img className="icon" src="../../images/friends.png" alt="friends"/>}</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}