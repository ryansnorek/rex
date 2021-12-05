import { POSTER_URL } from "../constants";

function ItemDetailsTvShow({ tvShow, handleAdd }) {
    return (
        <div className="item-details">
            <img className="backdrop" src={`${POSTER_URL}${tvShow.backdrop_path}`} alt=""/>
            <h2>{tvShow.name}</h2>
            {tvShow.tagline && <h3>{tvShow.tagline}</h3>}
            <div className="text">
                <div className="left">
                    <p>Popularity: {tvShow.popularity}</p>
                    <p>First Aired: {tvShow.first_air_date}</p>
                </div>
                <div className="right">
                    <p>{tvShow.overview}</p>
                </div>
            </div>
            <div className="button-container">
                <button onClick={() => handleAdd(tvShow.id)}>Add to collection</button>
            </div>
        </div>
    )
};
export default ItemDetailsTvShow;