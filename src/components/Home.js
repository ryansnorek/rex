import { connect } from "react-redux";
import { setItemMovie, setItemTvShow } from "../actions";
import { useState } from "react";
import HomeItem from "./HomeItem";
import useDisplayItems from "../hooks/useDisplayItems";
import ItemDetails from "./ItemDetails";
import NavButton from "./NavButton";

const buttons = ["Trending", "Movies", "Shows"];

function Home({ dispatch, discover }) {
  const [displayItems, displayType, handleToggleItem] =
    useDisplayItems(discover);
  const [itemClicked, setItemClicked] = useState(false);
  const handleItemClose = () => setItemClicked(false);

  const handleClickPoster = (id, type) => {
    const item = displayItems.find((di) => di.id === id);
    dispatch(type === "movie" ? setItemMovie(item) : setItemTvShow(item));
    setItemClicked(true);
  };

  const blur = (classname) => {
    return `${classname} ${itemClicked && "blur"}`;
  };

  return (
    <div className="home page">
      <nav className={blur("nav-bar")}>
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
      <div className={blur("discover")}>
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
