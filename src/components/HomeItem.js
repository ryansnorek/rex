import { POSTER_URL } from "../constants";

function HomeItem({ handleClickPoster, item }) {
  const type = item.first_air_date ? "tv" : "movie";

  return (
    <div
      className="discover-item grow"
      onClick={() =>
        handleClickPoster(item.id, type)
      }
    >
      {item.poster_path ? (
        <img id="poster" src={`${POSTER_URL}${item.poster_path}`} alt="poster" />
      ) : (
        <img src="../../images/unavailable_poster.jpeg" alt="poster" />
      )}
    </div>
  );
}
export default HomeItem;
