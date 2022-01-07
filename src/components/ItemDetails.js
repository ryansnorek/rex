import { connect } from "react-redux";
import ItemDetailsMovie from "./ItemDetailsMovie";
import ItemDetailsTvShow from "./ItemDetailsTvShow";

function ItemDetails({ item, user }) {
  const movie = item.movie ? item.movie : [];
  const tvShow = item.tvShow ? item.tvShow : [];

  const handleAddContent = (content_id, addContent) => {
    if (!user.user_id) return alert("login to add content");
    addContent(content_id, user.user_id);
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
