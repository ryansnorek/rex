import { POSTER_URL } from "../constants";

function ItemDetailsMovie({ movie, handleAdd }) {
    const { 
        backdrop_path, title, tagline, genres, 
        budget, revenue, vote_average, release_date, 
        overview, id 
        } = movie;
         
    return (
        <div className="item-details">
            <img className="backdrop" src={`${POSTER_URL}${backdrop_path}`} alt=""/>
            <h2>{title}</h2>
            <h3>{tagline}</h3>
            <div className="genres">
                {genres && genres.map(g => <p>{g.name}</p>)}
            </div>
            <div className="text">
                <div className="left">
                    <p className="heart">{vote_average}</p>
                    {!vote_average && <p>no ratings yet</p>}
                </div>
                <div className="center">
                    <p>Released: {release_date}</p>
                    <p>Budget: ${budget === 0 ? " unavailable" : budget.toLocaleString()}</p>
                    <p>Revenue: ${revenue === 0 ? " unavailable" : revenue.toLocaleString()}</p> 
                </div>
                <div className="right">
                    <p>{overview ? overview : "overview unavailable"}</p>
                </div>
            </div>
            <div className="button-container">
                <button onClick={() => handleAdd(id)}>Add to collection</button>
                <a 
                    className="google-it"
                    href={`https://www.google.com/search?q=what+is+${title}+streaming+on&oq=what+is+dexter+streaming+on&aqs=chrome..69i57j0i7i30l2j0i8i30l7.27237j0j7&sourceid=chrome&ie=UTF-8`}
                    target="_blank" 
                    rel="noreferrer"
                >Find which streaming service</a>
            </div>
        </div>
    )
};
export default ItemDetailsMovie;