import { POSTER_URL } from "../constants";

function HomeItem({ handleClickPoster, item }) {
  let type = item.media_type || "tv";
  return (
    <div
      className="discover-item"
      onClick={() =>
        handleClickPoster(item.id, type)
      }
    >
      {item.poster_path ? (
        <img src={`${POSTER_URL}${item.poster_path}`} alt="poster" />
      ) : (
        <img src="../../images/unavailable_poster.jpeg" alt="poster" />
      )}
    </div>
  );
}
export default HomeItem;
