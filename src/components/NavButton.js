export default function HomeButton({ displayType, title, handleToggleItem }) {
  const typeSwitch = {
    "Trending": "trending",
    "Movies": "movies",
    "TV Shows": "tvShows",
    "Rexys": "rexys",
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
