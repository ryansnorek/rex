import { createPoster } from "../helper";

function HomeItem({ handleClickPoster, item }) {
  const type = item.first_air_date ? "tv" : "movie";

  return (
    <div
      className="discover-item grow"
      onClick={() => handleClickPoster(item.id, type)}
    >
      {item.poster_path && (
        <img
          className="temp-placeholder"
          id="poster"
          src={createPoster(item.poster_path)}
          alt="poster"
        />
      )}
    </div>
  );
}
export default HomeItem;
