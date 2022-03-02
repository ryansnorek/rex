import AccountWatchlistItem from "./AccountWatchlistItem";
import { connect } from "react-redux";

function AccountWatchlist({ content }) {
  const { watchlistMovies, watchlistShows } = content;
  return (
    <div className="watchlist">
      <div className="movies">
        <h2>Movies</h2>
        {watchlistMovies &&
          watchlistMovies.map((item) => {
            return (
              <AccountWatchlistItem key={item.id} item={item} type={"movie"} />
            );
          })}
      </div>
      <div className="shows">
        <h2>Shows</h2>
        {watchlistShows &&
          watchlistShows.map((item) => {
            return (
              <AccountWatchlistItem key={item.id} item={item} type={"tvShow"} />
            );
          })}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({ content: state.userContentList });
export default connect(mapStateToProps)(AccountWatchlist);
