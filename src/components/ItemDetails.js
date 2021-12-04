import { connect } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { findMovieById } from "../actions";
import { POSTER_URL } from "../constants";
import { addRexy } from "../actions";

function ItemDetails({ dispatch, item }) {
    const { id } = useParams();
    
    const handleAdd = id => dispatch(addRexy(id));

    if (!item.movie) return <h1>If you do not see it, please refresh the page</h1>
    return (
        <div className="item-details">
            <img className="backdrop" src={`${POSTER_URL}${item.movie.backdrop_path}`} alt=""/>
            <h2>{item.movie.title}</h2>
            <h3>{item.movie.tagline}</h3>
            <div className="text">
                <div className="left">
                    <div className="genres">
                        <p>Genre: </p>{item.movie.genres.map(g => <p>{g.name}</p>)}
                        <p>Budget: ${item.movie.budget.toLocaleString()}</p>
                        <p>Revenue: ${item.movie.revenue.toLocaleString()}</p> 
                        <p>Popularity: {item.movie.popularity}</p>
                        <p>Released: {item.movie.release_date}</p>
                    </div>
                </div>
                <div className="right">
                    <p>{item.movie.overview}</p>
                </div>
            </div>
            <div className="button-container">
                <button>Details</button>
                <button onClick={() => handleAdd(item.id)}>Add</button>
            </div>
        </div>
    )
};
const mapStateToProps = (state) => ({ item: state.item });

export default connect(mapStateToProps)(ItemDetails);