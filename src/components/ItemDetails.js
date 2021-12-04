import { connect } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { findMovieById } from "../actions";
import { POSTER_URL } from "../constants";
import { addRexy } from "../actions";

function ItemDetails({ dispatch, item }) {
    const { id } = useParams();
    const movie = item.movie ? item.movie : [];
    
    const handleAdd = id => dispatch(addRexy(id));

    if (!item.movie) return <h1>If you do not see it, please refresh the page</h1>
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
            </div>
        </div>
    )
};
const mapStateToProps = (state) => ({ item: state.item });

export default connect(mapStateToProps)(ItemDetails);