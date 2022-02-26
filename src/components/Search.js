import { connect } from "react-redux";
import { useState } from "react";
import { setItemMovie, setItemTvShow, unSetItem } from "../actions";
import SearchItem from "./SearchItem";
import useSearch from "../hooks/useSearch";
import ItemDetails from "./ItemDetails";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Search({ dispatch, queryResults, isFetching }) {
  const [queryType, query, handleSelectQueryType, handleQueryChange] = useSearch("movie");

  const [itemClicked, setItemClicked] = useState(false);
  const handleItemClose = () => {
    dispatch(unSetItem());
    setItemClicked(false);
  };

  const handleClickItem = (id, type) => {
    const item = queryResults.find((qr) => qr.id === id);
    dispatch(
      type === "movie"
        ? dispatch(setItemMovie(item))
        : dispatch(setItemTvShow(item))
    );
    setItemClicked(true);
  };
  return (
    <div className="search page">
      <div className="nav-bar">
        <form>
          <input
            type="search"
            name="search"
            placeholder="Search content"
            value={query}
            onChange={handleQueryChange}
          />
          <select onChange={handleSelectQueryType}>
            <option value="movie">Movies</option>
            <option value="tv">TV Shows</option>
          </select>
        </form>
      </div>
      <div className="container">
        {itemClicked && <ItemDetails handleItemClose={handleItemClose} />}
      </div>
      <div className={`results  ${itemClicked ? "blur" : ""}`}>
        {isFetching && query ? (
           <SkeletonTheme baseColor="#1d1d1d" highlightColor="rgb(176, 176, 194)">
             <Skeleton count={8} height={220}/>
           </SkeletonTheme>
        ) : (
          query &&
          queryResults.map((result) => {
            return (
              <SearchItem
                item={result}
                queryType={queryType}
                handleClickItem={handleClickItem}
                setItemClicked={setItemClicked}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    queryResults: state.queryResults,
    discover: state.discover,
    isFetching: state.isFetching,
    errors: state.errors,
  };
};
export default connect(mapStateToProps)(Search);
