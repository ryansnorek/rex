import { POSTER_URL } from "../constants";
import { addUserTvShow } from "../helper";

function ItemDetailsTvShow({ tvShow, handleAddContent }) {
  const {
    backdrop_path,
    name,
    tagline,
    genres,
    vote_average,
    first_air_date,
    overview,
    id,
    networks,
  } = tvShow;

  return (
    <div className="item-details">
      <img className="backdrop" src={`${POSTER_URL}${backdrop_path}`} alt="" />
      <h2>{name}</h2>
      {tagline && <h3>{tagline}</h3>}
      <div className="genres">
        {genres && genres.map((g) => <p>{g.name}</p>)}
      </div>
      <div className="text">
        <div className="left-center">
          <div className="left">
            <p className="heart">{vote_average}</p>
          </div>
          <div className="center">
            <p>First Aired: {first_air_date}</p>
            {networks && networks.map((n) => <p>{n.name}</p>)}
          </div>
        </div>
        <div className="right">
          <p>{overview}</p>
        </div>
      </div>
      <div className="button-container">
        <button
          className="round-button"
          onClick={() => handleAddContent(id, addUserTvShow, "tv")}
        >
          Add to collection
        </button>
      </div>
    </div>
  );
}
export default ItemDetailsTvShow;
