import { useState } from "react";
import { connect } from "react-redux";
import AccountProfile from "./AccountProfile";
import WelcomeNewUser from "./WelcomeNewUser";
import NavButton from "./NavButton";
import AccountWatchlist from "./AccountWatchlist";
import AccountFriends from "./AccountFriends";

function Account({
  user,
  userContentList,
  isFetching,
  firstTimeUser,
  relationships,
  dispatch,
}) {
  const [displayType, setDisplayType] = useState("rexys");
  const { following, followers } = relationships;
  const handleToggleItem = (e) => {
    setDisplayType(e.target.name);
  };

  if (isFetching) {
    return (
      <div className="loading-container">
        <div className="loading"></div>
      </div>
    );
  }
  if (firstTimeUser) {
    return <WelcomeNewUser user={user} dispatch={dispatch} />;
  }
  const buttons = ["Rexys", "Watchlist", "Following", "Followers"];
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
      {displayType === "watchlist" && <AccountWatchlist content={userContentList} />}
      {displayType === "following" && <AccountFriends friends={following} type={"Following"}/>}
      {displayType === "followers" && <AccountFriends friends={followers} type={"Followers"}/>}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    userContent: state.userContent,
    userContentList: state.userContentList,
    isFetching: state.isFetching,
    firstTimeUser: state.firstTimeUser,
    relationships: state.relationships,
  };
};
export default connect(mapStateToProps)(Account);
