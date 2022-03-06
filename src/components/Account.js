import useLocalStorage from "../hooks/useLocalStorage";
import { connect } from "react-redux";
import AccountProfile from "./AccountProfile";
import AccountAvatar from "./AccountAvatar";
import NavButton from "./NavButton";
import AccountWatchlist from "./AccountWatchlist";
import AccountFriends from "./AccountFriends";

const buttons = ["Rexys", "Watchlist", "Following", "Followers"];

function Account({ isFetching, firstTimeUser, relationships }) {
  const { following, followers } = relationships;
  const [displayType, setDisplayType] = useLocalStorage("display-type", "rexys");
  const handleToggleItem = (e) => setDisplayType(e.target.name);

  if (isFetching) {
    return (
      <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    );
  }
  if (firstTimeUser) {
    return <AccountAvatar />;
  }
  return (
    <div className="account page">
      <AccountProfile />
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
      {displayType === "following" && <AccountFriends friends={following} type="following"/>}
      {displayType === "followers" && <AccountFriends friends={followers} type="followers"/>}
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
