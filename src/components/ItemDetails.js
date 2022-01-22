import { connect } from "react-redux";
import { addUserMovie, addUserTvShow } from "../actions";
import ItemDetailsMovie from "./ItemDetailsMovie";
import ItemDetailsTvShow from "./ItemDetailsTvShow";
import useScrollSet from "../hooks/useScrollSet";

function ItemDetails({ dispatch, item, user, handleItemClose }) {
  const movie = item.movie ? item.movie : [];
  const tvShow = item.tvShow ? item.tvShow : [];
  const type = item.movie ? "movie" : "tv";
  const contentId = item.movie ? item.movie.id : item.tvShow.id;

  const scrollPosition = useScrollSet();

  const handleAddContent = (contentId, type) => {
    if (!user.user_id) {
      return alert("login to add content");
    }
    dispatch(
      type === "movie"
        ? addUserMovie(contentId, user.user_id)
        : addUserTvShow(contentId, user.user_id)
    );
    alert("added rexy");
  };

  if (!item.movie && !item.tvShow) {
    return <h1>Please refresh the page</h1>;
  }
  return (
    <div
      className="page item-details-wrapper"
      style={{ marginTop: `${scrollPosition}px` }}
    >
      <nav>
        <button
          className="round-button"
          onClick={() => handleAddContent(contentId, type)}
        >
          +
        </button>
        <button className="round-button close" onClick={handleItemClose}>
          X
        </button>
      </nav>
      {item.movie && (
        <ItemDetailsMovie
          key={movie.id}
          movie={movie}
          handleAddContent={handleAddContent}
        />
      )}
      {item.tvShow && (
        <ItemDetailsTvShow
          key={tvShow.id}
          tvShow={tvShow}
          handleAddContent={handleAddContent}
        />
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  userContent: state.userContent,
  userContentList: state.userContentList,
  item: state.item,
  user: state.user,
});
export default connect(mapStateToProps)(ItemDetails);
