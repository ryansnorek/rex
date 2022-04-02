import { POSTER_URL, UNAVAILABLE } from "../constants";

function HomeItem({ handleClickPoster, item }) {
  const type = item.first_air_date ? "tv" : "movie";
  const poster = `${POSTER_URL}${item.poster_path}`;

  return (
    <div
      className="discover-item grow"
      onClick={() => handleClickPoster(item.id, type)}
    >
      {item.poster_path && (
        <img
          className="temp-placeholder"
          id="poster"
          src={poster || UNAVAILABLE}
          alt="poster"
        />
      )}
    </div>
  );
}
export default HomeItem;
