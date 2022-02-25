import WatchlistItem from "./WatchlistItem";

function AccountWatchlist({ userContentList }) {
  const { movies, tvShows } = userContentList;
  return (
    <div className="watchlist">
      <h2>Movies</h2>
      {movies &&
        movies.map((item) => {
          return <WatchlistItem key={item.id} item={item} type={"movie"} />;
        })}
      <h2>Tv Shows</h2>
      {tvShows &&
        tvShows.map((item) => {
          return <WatchlistItem key={item.id} item={item} type={"tvShow"} />;
        })}
    </div>
  );
}
export default AccountWatchlist;
