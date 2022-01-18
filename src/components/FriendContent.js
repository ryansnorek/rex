import { POSTER_URL } from "../constants";
import { addUserMovie, addUserTvShow, findContentById } from "../actions";
import { useNavigate } from "react-router-dom";

export default function FriendContent({ item, dispatch, type }) {
  const navigate = useNavigate();
  const handleAddRexy = (contentId) => {
    // dispatch(
    //     type === "movie"
    //       ? addUserMovie(contentId, user.user_id)
    //       : addUserTvShow(contentId, user.user_id)
    //   );
    //   alert("added rexy")
    alert("not ready yet");
  };
  const handleClickItem = (id, type) => {
    dispatch(findContentById(id, type));
    setTimeout(() => navigate(`/item/${id}`), 100);
  };
  return (
    <div className="account-item">
      <div className="poster" onClick={() => handleClickItem(item.id, type)}>
        {item.backdrop_path !== null ? (
          <img src={`${POSTER_URL}${item.backdrop_path}`} alt="poster" />
        ) : (
          <img src="../../images/unavailable_poster.jpeg" alt="poster" />
        )}
      </div>
      <div className="text" onClick={() => handleClickItem(item.id, type)}>
        <h3>{item.title || item.name}</h3>
      </div>
      <div className="button-container">
        <button className="round-button" onClick={() => handleAddRexy(item.id)}>
          Add rexy
        </button>
      </div>
    </div>
  );
}
