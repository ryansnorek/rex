import { createPoster } from "../helper";
// import { addWatchlistMovie, addWatchlistShow } from "../actions";

function UserContent({ item, type, handleClickItem }) {
  // const handleAddRexy = (contentId) => {
  // dispatch(
  //     type === "movie"
  //       ? addWatchlistMovie(contentId, user.user_id)
  //       : addWatchlistShow(contentId, user.user_id)
  //   );
  //   alert("added rexy")
  // alert("not ready yet");
  // };
  return (
    <div className="account-item">
      <div className="poster" onClick={() => handleClickItem(item.id, type)}>
        <img
          className="temp-placeholder"
          src={createPoster(item.backdrop_path)}
          alt="poster"
        />
      </div>
      <div className="text" onClick={() => handleClickItem(item.id, type)}>
        <h3>{item.title || item.name}</h3>
      </div>
      {/* <img
          className="icon"
          onClick={() => handleAddRexy(item.id)}
          src="../../images/add.png"
          alt="add"
        /> */}
    </div>
  );
}
export default UserContent;
