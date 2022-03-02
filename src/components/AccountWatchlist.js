import AccountWatchlistItem from "./AccountWatchlistItem";
import { connect } from "react-redux";

function AccountWatchlist({ content }) {
  const { watchlistMovies, watchlistShows } = content;
  return (
    <div className="watchlist">
      <h2>Movies</h2>
      {watchlistMovies &&
        watchlistMovies.map((item) => {
          return (
            <AccountWatchlistItem key={item.id} item={item} type={"movie"} />
          );
        })}
      <h2>Shows</h2>
      {watchlistShows &&
        watchlistShows.map((item) => {
          return (
            <AccountWatchlistItem key={item.id} item={item} type={"tvShow"} />
          );
        })}
    </div>
  );
}
const mapStateToProps = (state) => ({ content: state.userContentList });
export default connect(mapStateToProps)(AccountWatchlist);
