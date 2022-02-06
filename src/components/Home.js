import { connect } from "react-redux";
import { setItemMovie, setItemTvShow } from "../actions";
import { useState } from "react";
import HomeItem from "./HomeItem";
import useDisplayItems from "../hooks/useDisplayItems";
import ItemDetails from "./ItemDetails";
import NavButton from "./NavButton";

function Home({ dispatch, discover }) {
  const [displayItems, displayType, handleToggleItem] = useDisplayItems(
    dispatch,
    discover
  );
  const [itemClicked, setItemClicked] = useState(false);
  const handleItemClose = () => setItemClicked(false);

  const handleClickPoster = (id, type) => {
    const item = displayItems.find((di) => di.id === id);
    dispatch(
      type === "movie"
        ? dispatch(setItemMovie(item))
        : dispatch(setItemTvShow(item))
    );
    setItemClicked(true);
  };
  const buttons = ["Trending", "Movies", "TV Shows"];
  return (
    <div className="home page">
      <nav className={`nav-bar  ${itemClicked ? "blur" : ""}`}>
        {buttons.map((title) => {
          return (
            <NavButton
              displayType={displayType}
              title={title}
              handleToggleItem={handleToggleItem}
            />
          );
        })}
      </nav>
      <div className="container">
        {itemClicked && (
          <ItemDetails
            handleItemClose={handleItemClose}
            itemClicked={itemClicked}
          />
        )}
      </div>
      <div className={`discover  ${itemClicked ? "blur" : ""}`}>
        {displayItems &&
          displayItems.map((item) => {
            return (
              <HomeItem
                handleClickPoster={handleClickPoster}
                item={item}
                key={item.id}
              />
            );
          })}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  discover: state.discover,
  isFetching: state.isFetching,
});
export default connect(mapStateToProps)(Home);
