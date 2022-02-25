import { useState } from "react";
import { connect } from "react-redux";
import AccountProfile from "./AccountProfile";
import WelcomeNewUser from "./WelcomeNewUser";
import NavButton from "./NavButton";
import AccountWatchlist from "./AccountWatchlist";

function Account({ user, userContentList, isFetching, firstTimeUser, dispatch }) {

  const [displayType, setDisplayType] = useState("rexys");
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
    return (
      <WelcomeNewUser user={user} dispatch={dispatch}/>
    )
  }
  const buttons = ["Rexys", "Friends", "Watchlist"];
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
      {displayType === "watchlist" && <AccountWatchlist userContentList={userContentList}/>}
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
  };
};
export default connect(mapStateToProps)(Account);
