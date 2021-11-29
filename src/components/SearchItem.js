import { connect } from "react-redux";
import { POSTER_URL } from "../constants";
import { addRexy } from "../actions";

function SearchItem(props) {
    const { dispatch, item, category } = props;
    
    const handleClick = id => {
        dispatch(addRexy(id));
    };

    return (
        <div className="item">
            {item.poster_path ? <img src={`${POSTER_URL}${item.poster_path}`} alt="poster"/> : <img src="../../images/unavailable_poster.jpeg" alt="poster" />}
            <div className="text">
                {category === "tv" ? <h2>{item.original_name}</h2> : <h2>{item.title}</h2>}
                {item.overview ? <p className="overview">{item.overview}</p> : <p>Description unavailable</p>}
                {category ==="tv" ? <p>First aired: {item.first_air_date}</p> : <p>Release date: {item.release_date}</p>}
                <button onClick={() => handleClick(item.id)}>Add {category === "tv" ? "Show": "Movie"}</button>
            </div>
        </div>
    )
}

export default connect()(SearchItem);