export default function NavButton({ displayType, title, handleToggleItem }) {
  const typeSwitch = {
    Trending: "trending",
    Movies: "movies",
    Shows: "tvShows",
    Rexys: "rexys",
    Following: "following",
    Followers: "followers",
    Friends: "friends",
    Watchlist: "watchlist",
  };
  const name =
    "navlink" + (displayType === typeSwitch[title] && " activated");
  return (
    <button
      className={name}
      onClick={handleToggleItem}
      name={typeSwitch[title]}
    >
      {title}
    </button>
  );
}
