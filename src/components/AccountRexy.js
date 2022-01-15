import { connect } from "react-redux";
import { POSTER_URL } from "../constants";
import { deleteUserMovie, deleteUserTvShow } from "../actions";
import { useEffect } from "react";
import UserContentActionBar from "./UserContentActionBar";

function AccountRexy({ dispatch, item, type, user }) {
  useEffect(() => {}, []);
  const handleRemove = (itemId) => {
    dispatch(
      type === "movie"
        ? deleteUserMovie(itemId, user.user_id)
        : deleteUserTvShow(itemId, user.user_id)
    );
  };

  const handleSend = () => {
    alert("cant send yet")
  };
  const handleRating = () => {
    alert("cant rate yet")
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
      {/* <div className="actions">
        <img
          className="icon"
          src="../../images/heart.png"
          alt="rate"
          onClick={() => handleRating(item.id)}
        />
        <img
          className="icon"
          src="../../images/paper-plane.png"
          alt="send"
          onClick={() => handleSend(item.id)}
        />
        <img
          className="icon delete"
          src="../../images/x.png"
          alt="delete"
          onClick={() => handleRemove(item.id)}
        />
      </div> */}
    </div>
  );
}
const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps)(AccountRexy);
