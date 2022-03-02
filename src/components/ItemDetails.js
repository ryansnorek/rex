import { connect } from "react-redux";
import { addWatchlistMovie, addWatchlistShow } from "../actions";
import ItemDetailsMovie from "./ItemDetailsMovie";
import ItemDetailsTvShow from "./ItemDetailsTvShow";
import useScrollSet from "../hooks/useScrollSet";
import { useNavigate } from "react-router-dom";

function ItemDetails({ dispatch, item, user, handleItemClose }) {
  const navigate = useNavigate();
  const type = item.movie ? "movie" : "tv";
  const contentId = item.movie ? item.movie.id : item.tvShow.id;

  const scrollPosition = useScrollSet();

  const handleAddContent = () => {
    if (!user.user_id) {
      alert("login to add content");
      navigate("/login");
      return;
    }
    dispatch(
      type === "movie"
        ? addWatchlistMovie(contentId, user.user_id)
        : addWatchlistShow(contentId, user.user_id)
    );
    alert("added rexy");
    handleItemClose();
  };
  return (
    <div
      className="page item-details-wrapper"
      style={{ marginTop: `${scrollPosition + 60}px` }}
    >
      <nav>
        <img
          className="icon"
          onClick={() => handleAddContent()}
          src="../../images/add.png"
          alt="add"
        />
        <img
          className="icon"
          onClick={handleItemClose}
          src="../../images/close.png"
          alt="close"
        />
      </nav>
      {item.movie && (
        <ItemDetailsMovie
          movie={item.movie}
          handleAddContent={handleAddContent}
        />
      )}
      {item.tvShow && (
        <ItemDetailsTvShow
          tvShow={item.tvShow}
          handleAddContent={handleAddContent}
        />
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  userContent: state.userContent,
  item: state.item,
  user: state.user,
});
export default connect(mapStateToProps)(ItemDetails);
