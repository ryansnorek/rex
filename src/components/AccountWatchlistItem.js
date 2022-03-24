import { connect } from "react-redux";
import { POSTER_URL } from "../constants";
import { deleteWatchlistMovie, deleteWatchlistShow } from "../actions";
import UserContentActionBar from "./UserContentActionBar";

function AccountWatchlistItem({
  dispatch,
  item,
  type,
  user,
  setSendingRexy,
  setRexy,
}) {
  const { user_id } = user;
  const handleRemove = (item_id) => {
    dispatch(
      type === "movie"
        ? deleteWatchlistMovie(item_id, user_id)
        : deleteWatchlistShow(item_id, user_id)
    );
  };
  const handleSend = (item_id) => {
    setSendingRexy(true);
    type === "movie"
      ? setRexy({ movie_id: item_id, relative_user_id: user_id })
      : setRexy({ show_id: item_id, relative_user_id: user_id });
  };
  const handleRating = () => {
    alert("cant rate yet");
  };

  return (
    <div className="account-item">
      <div className="poster">
        {item.backdrop_path !== null ? (
          <img className="temp-placeholder" src={`${POSTER_URL}${item.backdrop_path}`} alt="poster" />
        ) : (
          <img src="../../images/unavailable_poster.jpeg" alt="poster" />
        )}
      </div>
      <div className="text">
        <h3>{item.title || item.name}</h3>
      </div>
      <UserContentActionBar
        handleRating={handleRating}
        handleSend={handleSend}
        handleRemove={handleRemove}
        item={item}
      />
    </div>
  );
}
const mapStateToProps = (state) => ({
  user: state.user,
  relationships: state.relationships,
});
export default connect(mapStateToProps)(AccountWatchlistItem);
