import { connect } from "react-redux";
import { getUserMovies, getUserTvShows } from "../actions";
import ItemDetailsMovie from "./ItemDetailsMovie";
import ItemDetailsTvShow from "./ItemDetailsTvShow";

function ItemDetails({ dispatch, item, user }) {
  const movie = item.movie ? item.movie : [];
  const tvShow = item.tvShow ? item.tvShow : [];

  const handleAddContent = (contentId, addContent, type) => {
    if (!user.user_id) {
      return alert("login to add content");
    }
    addContent(contentId, user.user_id);
    dispatch(
      type === "movie"
        ? getUserMovies(user.user_id)
        : getUserTvShows(user.user_id)
    );
  };

  if (!item.movie && !item.tvShow) {
    return <h1>Please refresh the page</h1>;
  }
  return (
    <div className="page">
      {item.movie && (
        <ItemDetailsMovie 
          movie={movie} 
          handleAddContent={handleAddContent} 
        />
      )}
      {item.tvShow && (
        <ItemDetailsTvShow
          tvShow={tvShow}
          handleAddContent={handleAddContent}
        />
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  item: state.item,
  user: state.user,
});
export default connect(mapStateToProps)(ItemDetails);
