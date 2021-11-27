import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h1>REX</h1>
            <p>A place to share your recommendations</p>
            <nav>
                <div className="links">
                    <ul>
                        <li>
                            <Link to="/main">main</Link>
                        </li>
                        <li>
                            <Link to="/about">about</Link>
                        </li>
                        <li>
                            <Link to="/account">account</Link>
                        </li>
                        <li>
                            <Link to="/login">login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}