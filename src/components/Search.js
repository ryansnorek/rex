import { connect } from "react-redux";
import { useState } from "react";
import { setItemMovie, setItemTvShow, unSetItem } from "../actions";

import useSearch from "../hooks/useSearch";
import ItemDetails from "./ItemDetails";
import SearchItem from "./SearchItem";
import LoadingEllispis from "./common/LoadingEllipsis";

function Search({ dispatch, queryResults, isFetching }) {
  const [queryType, query, handleSelectQueryType, handleQueryChange] =
    useSearch("movie");

  const [itemClicked, setItemClicked] = useState(false);
  const handleItemClose = () => {
    dispatch(unSetItem());
    setItemClicked(false);
  };

  const handleClickItem = (id, type) => {
    const item = queryResults.find((qr) => qr.id === id);
    dispatch(type === "movie" ? setItemMovie(item) : setItemTvShow(item));
    setItemClicked(true);
  };

  const blur = (classname) => {
    return `${classname} ${itemClicked && "blur"}`;
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
      <div className={blur("results")}>
        {isFetching && query ? (
          <div className="loading-wrapper">
            <LoadingEllispis />
          </div>
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
