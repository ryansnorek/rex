import { connect } from "react-redux";
import { POSTER_URL, UNAVAILABLE } from "../constants";
import { deleteWatchlistMovie, deleteWatchlistShow } from "../actions";
import { createRexy } from "../helper";
import UserContentActionBar from "./UserContentActionBar";

function AccountWatchlistItem({
  dispatch,
  item,
  type,
  user,
  setSendingRexy,
  setRexy,
}) {
  const poster = `${POSTER_URL}${item.backdrop_path}`;
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
    const rexy = createRexy(item_id, user_id, type);
    setRexy(rexy);
  };
  const handleRating = () => {
    alert("cant rate yet");
  };

  return (
    <div className="account-item">
      <div className="poster">
        <img
          className="temp-placeholder"
          src={poster || UNAVAILABLE}
          alt="poster"
        />
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
