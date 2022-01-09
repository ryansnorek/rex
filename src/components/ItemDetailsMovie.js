import { POSTER_URL } from "../constants";

function ItemDetailsMovie({ movie, handleAddContent }) {
  const {
    backdrop_path,
    title,
    tagline,
    genres,
    budget,
    revenue,
    vote_average,
    release_date,
    overview,
    id,
  } = movie;

  return (
    <div className="item-details">
      <img className="backdrop" src={`${POSTER_URL}${backdrop_path}`} alt="" />
      <h2>{title}</h2>
      <h3>{tagline}</h3>
      <div className="genres">
        {genres && genres.map((g) => <p>{g.name}</p>)}
      </div>
      <div className="text">
        <div className="left-center">
          <div className="left">
            <p className="heart">{vote_average}</p>
            {!vote_average && <p>no ratings yet</p>}
          </div>
          <div className="center">
            <p>Released: {release_date}</p>
            <p>
              Budget: ${budget === 0 ? " unavailable" : budget.toLocaleString()}
            </p>
            <p>
              Revenue: $
              {revenue === 0 ? " unavailable" : revenue.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="right">
          <p>{overview ? overview : "overview unavailable"}</p>
        </div>
      </div>
      <div className="button-container">
        <button className="round-button" 
          onClick={() => handleAddContent(id, "movie")}
        >
          Add to collection
        </button>
      </div>
    </div>
  );
}
export default ItemDetailsMovie;
