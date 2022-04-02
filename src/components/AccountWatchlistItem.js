import { connect } from "react-redux";
import { deleteWatchlistMovie, deleteWatchlistShow } from "../actions";
import { createRexy, createPoster } from "../helper";
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
          src={createPoster(item.backdrop_path)}
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
