import { connect } from "react-redux";
import { addUserMovie, addUserTvShow } from "../actions";
import ItemDetailsMovie from "./ItemDetailsMovie";
import ItemDetailsTvShow from "./ItemDetailsTvShow";
import useScrollSet from "../hooks/useScrollSet";

function ItemDetails({ dispatch, item, user, handleItemClose }) {
  const type = item.movie ? "movie" : "tv";
  const contentId = item.movie ? item.movie.id : item.tvShow.id;

  const scrollPosition = useScrollSet();

  const handleAddContent = (type) => {
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
  return (
    <div
      className="page item-details-wrapper"
      style={{ marginTop: `${scrollPosition}px`}}
    >
      <nav>
        <img
          className="icon"
          onClick={() => handleAddContent(contentId, type)}
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
  userContentList: state.userContentList,
  item: state.item,
  user: state.user,
});
export default connect(mapStateToProps)(ItemDetails);
