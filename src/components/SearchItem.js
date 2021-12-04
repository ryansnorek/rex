import { connect } from "react-redux";
import { POSTER_URL } from "../constants";
import { addRexy } from "../actions";
import { useNavigate } from "react-router-dom";

function SearchItem(props) {
    const { dispatch, item, category } = props;
    const navigate = useNavigate();
    
    const handleAdd = id => dispatch(addRexy(id));
    const handleClickDetails = id => navigate(`/item/${id}`);
    return (
        <div className="item">
            {item.poster_path ? <img src={`${POSTER_URL}${item.poster_path}`} alt="poster"/> : <img src="../../images/unavailable_poster.jpeg" alt="poster" />}
            <div className="text">
                {category === "tv" ? <h2>{item.original_name}</h2> : <h2>{item.title}</h2>}
                {item.overview ? <p className="overview">{item.overview}</p> : <p>Description unavailable</p>}
                {category ==="tv" ? <p>First aired: {item.first_air_date}</p> : <p>Release date: {item.release_date}</p>}
                <div className="button-container">
                    <button onClick={() => handleClickDetails(item.id)}>Details</button>
                    <button onClick={() => handleAdd(item.id)}>Add {category === "tv" ? "Show": "Movie"}</button>
                </div>
            </div>
        </div>
    )
}
export default connect()(SearchItem);