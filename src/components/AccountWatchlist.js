import WatchlistItem from "./WatchlistItem";

function AccountWatchlist({ content }) {
  const { movies, tvShows } = content;
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
