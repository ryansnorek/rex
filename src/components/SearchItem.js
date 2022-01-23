import { connect } from "react-redux";
import { POSTER_URL } from "../constants";
import { addUserMovie, addUserTvShow } from "../actions";

function SearchItem({ dispatch, item, queryType, user, handleClickItem }) {
  const type = queryType === "tv" ? "Show" : "movie";

  const handleAddContent = (contentId) => {
    if (!user.user_id) {
      return alert("login to add content");
    }
    dispatch(
      type === "movie"
        ? addUserMovie(contentId, user.user_id)
        : addUserTvShow(contentId, user.user_id)
    );
  };
  return (
    <div className="item">
      <div
        className="poster"
        onClick={() => handleClickItem(item.id, queryType)}
      >
        {item.poster_path ? (
          <img src={`${POSTER_URL}${item.poster_path}`} alt="poster" />
        ) : (
          <img src="../../images/unavailable_poster.jpeg" alt="poster" />
        )}
      </div>
      <div
        className="text"
        onClick={() => handleClickItem(item.id, queryType)}
      >
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
        <div className="actions">
          <img
            className="icon"
            onClick={() => handleAddContent(item.id)}
            src="../../images/add.png"
            alt="add"
          />
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
