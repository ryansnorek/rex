import { connect } from "react-redux";
import { POSTER_URL } from "../constants";
import { findContentById } from "../actions";
import { addUserMovie, addUserTvShow } from "../actions";
import { useNavigate } from "react-router-dom";
import { loadUserContent } from "../helper";

function SearchItem({ userContent, userContentList, dispatch, item, category, user }) {
  const navigate = useNavigate();

  const handleAddContent = (contentId, type) => {
    if (!user.user_id) {
      return alert("login to add content");
    }
    dispatch(
      type === "movie"
        ? addUserMovie(contentId, user.user_id)
        : addUserTvShow(contentId, user.user_id)
    );
    // loadUserContent(userContent, dispatch, userContentList);
  };
  const handleClickDetails = (id, type) => {
    dispatch(findContentById(id, type));
    setTimeout(() => {
      navigate(`/item/${id}`);
    }, 100);
  };
  return (
    <div className="item">
      <div className="poster">
        {item.poster_path ? (
          <img src={`${POSTER_URL}${item.poster_path}`} alt="poster" />
        ) : (
          <img src="../../images/unavailable_poster.jpeg" alt="poster" />
        )}
      </div>
      <div className="text">
        {category === "tv" ? (
          <h2>{item.original_name}</h2>
        ) : (
          <h2>{item.title}</h2>
        )}
        {category === "tv" ? (
          <p>First aired: {item.first_air_date}</p>
        ) : (
          <p>Released: {item.release_date}</p>
        )}
        <div className="button-container">
          <button
            onClick={() =>
              category === "tv"
                ? handleClickDetails(item.id, "tv")
                : handleClickDetails(item.id, "movie")
            }
          >
            Details
          </button>
          <button
            onClick={() =>
              handleAddContent(
                item.id,
                category === "tv" ? "Show" : "movie"
              )
            }
          >
            Add {category === "tv" ? "Show" : "Movie"}
          </button>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({ 
  user: state.user,
  userContent: state.userContent,
  userContentList: state.userContentList, 
});
export default connect(mapStateToProps)(SearchItem);
