import { createPoster } from "../helper";

function ItemDetailsMovie({ movie }) {
  const {
    backdrop_path,
    title,
    tagline,
    genres,
    vote_average,
    release_date,
    overview,
  } = movie;

  return (
    <div className="item-details">
      <img
        className="backdrop temp-placeholder"
        src={createPoster(backdrop_path)}
        alt="backdrop"
      />
      <h2>{title}</h2>
      <h3>{tagline}</h3>
      <div className="genres">
        {genres && genres.map((g) => <p>{g.name}</p>)}
      </div>
      <div className="text">
        <div className="left">
          <p className="heart">{vote_average}</p>
          {!vote_average && <p>no ratings yet</p>}
        </div>
        <p>Released: {release_date}</p>
        <div className="description">
          <p>{overview || "overview unavailable"}</p>
        </div>
      </div>
    </div>
  );
}
export default ItemDetailsMovie;
