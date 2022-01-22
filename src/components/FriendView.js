import { connect } from "react-redux";
import { useState } from "react";
import { findContentById } from "../actions";
import FriendContent from "./FriendContent";
import ItemDetails from "./ItemDetails";

function FriendView({ friend, friendContentList, dispatch }) {
  const { movies, tvShows } = friendContentList;
  const [itemClicked, setItemClicked] = useState(false);
  const handleItemClose = () => setItemClicked(false);

  const handleClickItem = (id, type) => {
    dispatch(findContentById(id, type));
    setTimeout(() => setItemClicked(true), 3.618);
  };
  return (
    <div className="page friend-view">
      {itemClicked && <ItemDetails handleItemClose={handleItemClose} />}
      <div className="card">
        <div className="pic">
          <img src="../../images/blank_user.png" alt="profile-pic" />
          <h3>{friend.display_name}</h3>
        </div>
      </div>
      <div className={`rexys ${itemClicked ? "blur" : ""}`}>
        <h2>Movies</h2>
        {movies &&
          movies.map((item) => {
            return (
              <FriendContent
                key={item.id}
                item={item}
                type={"movie"}
                dispatch={dispatch}
                handleClickItem={handleClickItem}
              />
            );
          })}
        <h2>Tv Shows</h2>
        {tvShows &&
          tvShows.map((item) => {
            return (
              <FriendContent
                key={item.id}
                item={item}
                type={"tv"}
                dispatch={dispatch}
                handleClickItem={handleClickItem}
              />
            );
          })}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    friend: state.friend,
    friendContentList: state.friendContentList,
  };
};
export default connect(mapStateToProps)(FriendView);
