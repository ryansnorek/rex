import { connect } from "react-redux";
import { POSTER_URL } from "../constants";
import { addRexy, findContentById } from "../actions";
import { useNavigate } from "react-router-dom";

function SearchItem({ dispatch, item, category, rexyIDs }) {
    const navigate = useNavigate();
    
    const handleAdd = (id) => {
        if (rexyIDs !== []) {
            const alreadyInCollection = rexyIDs.find(rexyID => rexyID === id);
            if (alreadyInCollection) {
                return alert("You already have that one");
            }
        }
        dispatch(addRexy(id));
    };
    const handleClickDetails = (id, type) => {
        dispatch(
            findContentById(id, type)
            );
        setTimeout(() => {
            navigate(`/item/${id}`)
        }, 100);
    };
    return (
        <div className="item">
            {
            item.poster_path ? 
            <img src={`${POSTER_URL}${item.poster_path}`} alt="poster"/> : 
            <img src="../../images/unavailable_poster.jpeg" alt="poster" />
            }
            <div className="text">
                {
                category === "tv" ? 
                <h2>{item.original_name}</h2> : 
                <h2>{item.title}</h2>
                }
                {
                category ==="tv" ? 
                <p>First aired: {item.first_air_date}</p> : 
                <p>Released: {item.release_date}</p>
                }
                <div className="button-container">
                    <button onClick={() => handleClickDetails(item.id, "movie")}>
                        Details
                    </button>
                    <button onClick={() => handleAdd(item.id)}>
                        Add {category === "tv" ? "Show": "Movie"}
                    </button>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({ rexyIDs: state.rexyIDs });
export default connect(mapStateToProps)(SearchItem);