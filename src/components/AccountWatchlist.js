import AccountWatchlistItem from "./AccountWatchlistItem";
import SendUserRexy from "./SendUserRexy";
import { useState } from "react";
import { connect } from "react-redux";

function AccountWatchlist({ content }) {
  const { watchlistMovies, watchlistShows } = content;
  const [sendingRexy, setSendingRexy] = useState(false);

  return (
    <div className="watchlist">
      {/* {sendingRexy && <SendUserRexy />} */}
      <div className="movies">
        <h2>Movies</h2>
        {watchlistMovies &&
          watchlistMovies.map((item) => {
            return (
              <AccountWatchlistItem
                key={item.id}
                item={item}
                type={"movie"}
                setSendingRexy={setSendingRexy}
              />
            );
          })}
      </div>
      <div className="shows">
        <h2>Shows</h2>
        {watchlistShows &&
          watchlistShows.map((item) => {
            return (
              <AccountWatchlistItem
                key={item.id}
                item={item}
                type={"tvShow"}
                setSendingRexy={setSendingRexy}
              />
            );
          })}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({ content: state.userContentList });
export default connect(mapStateToProps)(AccountWatchlist);
