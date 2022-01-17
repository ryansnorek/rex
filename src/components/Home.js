import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { findContentById } from "../actions";
import HomeItem from "./HomeItem";
import useDisplayItems from "../hooks/useDisplayItems";

function Home({ dispatch, discover, isFetching }) {
  const [displayItems, displayType, handleToggleItem] = useDisplayItems(
    dispatch,
    discover
  );

  const navigate = useNavigate();
  const handleClickPoster = (id, type) => {
    dispatch(findContentById(id, type));
    setTimeout(() => navigate(`/item/${id}`), 100);
  };

  if (isFetching) {
    return (
      <div className="loading-container">
        <div className="loading"></div>
      </div>
    );
  }
  return (
    <div className="home page">
        <nav className="nav-bar">
          <button
            className={"navlink" + (displayType === "trending" ? " activated" : "")}
            onClick={handleToggleItem}
            name="trending"
          >
            Trending
          </button>
          <button
            className={"navlink" + (displayType === "movies" ? " activated" : "")}
            onClick={handleToggleItem}
            name="movies"
          >
            Movies
          </button>
          <button
            className={"navlink" + (displayType === "tvShows" ? " activated" : "")}
            onClick={handleToggleItem}
            name="tvShows"
          >
            TV Shows
          </button>
        </nav>
      <div className="discover">
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
