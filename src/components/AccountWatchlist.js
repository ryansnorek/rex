import AccountWatchlistItem from "./AccountWatchlistItem";
import SendUserRexy from "./SendUserRexy";
import { useState } from "react";
import { connect } from "react-redux";

function AccountWatchlist({ content }) {
  const { watchlistMovies, watchlistShows } = content;
  const [sendingRexy, setSendingRexy] = useState(false);
  const [rexy, setRexy] = useState({});

  return (
    <div className="watchlist">
      {sendingRexy && (
        <SendUserRexy setSendingRexy={setSendingRexy} rexy={rexy} />
      )}
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
                setRexy={setRexy}
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
                type={"show"}
                setSendingRexy={setSendingRexy}
                setRexy={setRexy}
              />
            );
          })}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({ content: state.userContentList });
export default connect(mapStateToProps)(AccountWatchlist);
