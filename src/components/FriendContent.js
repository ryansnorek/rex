import { POSTER_URL } from "../constants";
import { addUserMovie, addUserTvShow } from "../actions";

export default function FriendContent({ item, dispatch }) {
    const handleAddRexy = (contentId) => {
        // dispatch(
        //     type === "movie"
        //       ? addUserMovie(contentId, user.user_id)
        //       : addUserTvShow(contentId, user.user_id)
        //   );
        //   alert("added rexy")
        alert("not ready yet")
    }
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
        <button className="round-button" onClick={() => handleAddRexy(item.id)}>Add rexy</button>
      </div>
    )
}