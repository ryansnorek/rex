export default function HomeButton({ displayType, title, handleToggleItem }) {
  const typeSwitch = {
    "Trending": "trending",
    "Movies": "movies",
    "TV Shows": "tvShows"
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
