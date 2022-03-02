import { connect } from "react-redux";
import { POSTER_URL } from "../constants";
import { deleteWatchlistMovie, deleteWatchlistShow } from "../actions";
import UserContentActionBar from "./UserContentActionBar";

function AccountRexy({ dispatch, item, type, user }) {
  const handleRemove = (itemId) => {
    dispatch(
      type === "movie"
        ? deleteWatchlistMovie(itemId, user.user_id)
        : deleteWatchlistShow(itemId, user.user_id)
    );
  };

  const handleSend = () => {
    alert("cant send yet");
  };
  const handleRating = () => {
    alert("cant rate yet");
  };

  return (
    <div className="account-item">
      <div className="poster">
        {item.backdrop_path !== null ? (
          <img src={`${POSTER_URL}${item.backdrop_path}`} alt="poster" />
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
});
export default connect(mapStateToProps)(AccountRexy);
