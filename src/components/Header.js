import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function Header() {
    const navigate = useNavigate();
    const [searchIsActive, setSearchIsActive] = useState(false);
    const [friendsIsActive, setFriendsIsActive] = useState(false);
    const [accountIsActive, setAccountIsActive] = useState(false);

    const handleSearchClick = () => {
        setSearchIsActive(true);
        setFriendsIsActive(false);
        setAccountIsActive(false);
    };
    const handleFriendsClick = () => {
        setSearchIsActive(false);
        setFriendsIsActive(true);
        setAccountIsActive(false);
    };
    const handleAccountClick = () => {
        setSearchIsActive(false);
        setFriendsIsActive(false);
        setAccountIsActive(true);
    };
    return (
        <header>
            <h1 className="logo" onClick={() => navigate("/")}>Rexy</h1>
            {/* <img className="logo" src="../../logo/android-chrome-192x192.png" alt="logo" /> */}
            <p className="tagline">A place to share your recommendations</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/search">
                            {<img 
                                className={"icon" + (searchIsActive ? " activated-icon" : "")}  
                                onClick={handleSearchClick}
                                src="../../images/magnifier.png" 
                                alt="search"/>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/friends">
                            {<img 
                                className={"icon" + (friendsIsActive ? " activated-icon" : "")}  
                                onClick={handleFriendsClick}
                                src="../../images/friends.png" 
                                alt="friends"/>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/account">
                            {<img 
                                className={"icon" + (accountIsActive ? " activated-icon" : "")}  
                                onClick={handleAccountClick}
                                src="../../images/user.png" 
                                alt="user-account"/>}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}