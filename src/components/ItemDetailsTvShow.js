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
                <a 
                    className="google-it"
                    href={`https://www.google.com/search?q=what+is+${tvShow.name}+streaming+on&oq=what+is+dexter+streaming+on&aqs=chrome..69i57j0i7i30l2j0i8i30l7.27237j0j7&sourceid=chrome&ie=UTF-8`}
                    target="_blank" 
                    rel="noreferrer"
                >Find which streaming service</a>
            </div>
        </div>
    )
};
export default ItemDetailsTvShow;