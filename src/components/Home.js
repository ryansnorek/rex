import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { findContentById } from "../actions";
import HomeItem from "./HomeItem";
import useDisplayItems from "../hooks/useDisplayItems";

function Home({ dispatch, discover }) {
  const [displayItems, displayType, handleToggleItem] = useDisplayItems(
    dispatch,
    discover
  );

  const navigate = useNavigate();
  const handleClickPoster = (id, type) => {
    dispatch(findContentById(id, type));
    setTimeout(() => navigate(`/item/${id}`), 100);
  };

  return (
    <div className="home page">
      <div className="nav-bar">
        <nav>
          <button
            className={
              "navlink" + (displayType === "trending" ? " activated" : "")
            }
            onClick={handleToggleItem}
            name="trending"
          >
            Trending
          </button>
          <button
            className={
              "navlink" + (displayType === "movie" ? " activated" : "")
            }
            onClick={handleToggleItem}
            name="movie"
          >
            Movies
          </button>
          <button
            className={"navlink" + (displayType === "tv" ? " activated" : "")}
            onClick={handleToggleItem}
            name="tv"
          >
            TV Shows
          </button>
        </nav>
      </div>
      <div className="discover">
        {displayItems &&
          displayItems.map((item) => {
            return (
              <HomeItem
                handleClickPoster={handleClickPoster}
                type={displayType}
                item={item}
              />
            );
          })}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({ discover: state.discover });
export default connect(mapStateToProps)(Home);
