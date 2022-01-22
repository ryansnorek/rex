import { connect } from "react-redux";
import { POSTER_URL } from "../constants";
import { findContentById } from "../actions";
import { addUserMovie, addUserTvShow } from "../actions";

function SearchItem({ dispatch, item, queryType, user, setItemClicked }) {

  const handleAddContent = (contentId, type) => {
    if (!user.user_id) {
      return alert("login to add content");
    }
    dispatch(
      type === "movie"
        ? addUserMovie(contentId, user.user_id)
        : addUserTvShow(contentId, user.user_id)
    );
  };
  const handleClickDetails = (id, type) => {
    dispatch(findContentById(id, type));
    setTimeout(() => setItemClicked(true), 3.618)

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
        <div className="title">
          {queryType === "tv" ? (
            <h2>{item.original_name}</h2>
          ) : (
            <h2>{item.title}</h2>
          )}
          {queryType === "tv" ? (
            <p>First aired: {item.first_air_date}</p>
          ) : (
            <p>Released: {item.release_date}</p>
          )}
        </div>
        <div className="button-container">
          <button
            className="round-button"
            onClick={() =>
              queryType === "tv"
                ? handleClickDetails(item.id, "tv")
                : handleClickDetails(item.id, "movie")
            }
          >
            Details
          </button>
          <button
            className="round-button"
            onClick={() =>
              handleAddContent(
                item.id,
                queryType === "tv" ? "Show" : "movie"
              )
            }
          >
            +
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
