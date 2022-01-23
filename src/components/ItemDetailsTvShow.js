import { POSTER_URL } from "../constants";

function ItemDetailsTvShow({ tvShow }) {
  const {
    backdrop_path,
    name,
    tagline,
    genres,
    vote_average,
    first_air_date,
    overview,
    networks,
  } = tvShow;

  const backdrop = backdrop_path
    ? `${POSTER_URL}${backdrop_path}`
    : "../../images/backdrop_unavailable.jpeg";
    
  return (
    <div className="item-details">
      <img className="backdrop" src={backdrop} alt="" />
      <h2>{name}</h2>
      {tagline && <h3>{tagline}</h3>}
      <div className="genres">
        {genres && genres.map((g) => <p>{g.name}</p>)}
      </div>
      <div className="text">
        <div className="left">
          <p className="heart">{vote_average}</p>
        </div>
        <p>First Aired: {first_air_date}</p>
        {networks && networks.map((n) => <p>{n.name}</p>)}
        <div className="description">
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
}
export default ItemDetailsTvShow;
