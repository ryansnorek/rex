import { connect } from "react-redux";
import { POSTER_URL } from "../constants";
import { addUserMovie, addUserTvShow } from "../actions";

function SearchItem({ dispatch, item, queryType, user, handleClickItem }) {
  const type = queryType === "tv" ? "Show" : "movie";
  const title = queryType === "tv" ? item.original_name : item.title;
  const date = queryType === "tv" ? item.first_air_date : item.release_date;
  const poster = item.poster_path
    ? `${POSTER_URL}${item.poster_path}`
    : "../../images/unavailable_poster.jpeg";

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
        <img src={poster} alt="poster" />
      </div>
      <div className="text" onClick={() => handleClickItem(item.id, queryType)}>
        <div className="title">
            <h2>{title}</h2>
            <p>{queryType === "tv" ? "First aired: " : "Released: "}{date}</p>
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
