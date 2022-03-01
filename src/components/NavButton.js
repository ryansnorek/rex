export default function NavButton({ displayType, title, handleToggleItem }) {
  const typeSwitch = {
    "Trending": "trending",
    "Movies": "movies",
    "TV Shows": "tvShows",
    "Rexys": "rexys",
    "Following": "following",
    "Followers": "followers",
    "Friends": "friends",
    "Watchlist": "watchlist"
  };
  return (
    <button
      className={
        "navlink" + (displayType === typeSwitch[title] ? " activated" : "")
      }
      onClick={handleToggleItem}
      name={typeSwitch[title]}
    >
      {title}
    </button>
  );
}
