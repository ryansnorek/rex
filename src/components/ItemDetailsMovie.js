import { POSTER_URL } from "../constants";

function ItemDetailsMovie({ movie, handleAdd }) {
    return (
        <div className="item-details">
            <img className="backdrop" src={`${POSTER_URL}${movie.backdrop_path}`} alt=""/>
            <h2>{movie.title}</h2>
            <h3>{movie.tagline}</h3>
            <div className="genres">
                {movie.genres.map(g => <p>{g.name}</p>)}
            </div>
            <div className="text">
                <div className="left">
                    <p>Budget: ${movie.budget.toLocaleString()}</p>
                    <p>Revenue: ${movie.revenue.toLocaleString()}</p> 
                    <p>Popularity: {movie.popularity}</p>
                    <p>Released: {movie.release_date}</p>
                </div>
                <div className="right">
                    <p>{movie.overview}</p>
                </div>
            </div>
            <div className="button-container">
                <button onClick={() => handleAdd(movie.id)}>Add to collection</button>
                <a 
                    className="google-it"
                    href={`https://www.google.com/search?q=what+is+${movie.title}+streaming+on&oq=what+is+dexter+streaming+on&aqs=chrome..69i57j0i7i30l2j0i8i30l7.27237j0j7&sourceid=chrome&ie=UTF-8`}
                    target="_blank" 
                    rel="noreferrer"
                >Find which streaming service</a>
            </div>
        </div>
    )
};
export default ItemDetailsMovie;