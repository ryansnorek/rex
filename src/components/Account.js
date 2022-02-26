import { useState } from "react";
import { connect } from "react-redux";
// import AccountProfile from "./AccountProfile";
import WelcomeNewUser from "./WelcomeNewUser";
import NavButton from "./NavButton";
import AccountWatchlist from "./AccountWatchlist";
import AccountFriends from "./AccountFriends";

const buttons = ["Rexys", "Watchlist", "Following", "Followers"];

function Account({ isFetching, firstTimeUser, relationships }) {
  const { following, followers } = relationships;
  const [displayType, setDisplayType] = useState("rexys");
  const handleToggleItem = (e) => setDisplayType(e.target.name);

  if (isFetching) {
    return (
      <div className="loading-container">
        <div className="loading"></div>
      </div>
    );
  }
  if (firstTimeUser) {
    return <WelcomeNewUser />;
  }
  return (
    <div className="account page">
      {/* <AccountProfile /> */}
      <nav className="nav-bar">
        {buttons.map((title) => {
          return (
            <NavButton
              displayType={displayType}
              title={title}
              handleToggleItem={handleToggleItem}
            />
          );
        })}
      </nav>
      {displayType === "watchlist" && <AccountWatchlist />}
      {displayType === "following" && <AccountFriends friends={following} />}
      {displayType === "followers" && <AccountFriends friends={followers} />}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    userContent: state.userContent,
    isFetching: state.isFetching,
    firstTimeUser: state.firstTimeUser,
    relationships: state.relationships,
  };
};
export default connect(mapStateToProps)(Account);
