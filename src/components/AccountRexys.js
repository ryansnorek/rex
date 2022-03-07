import { connect } from "react-redux";
import AccountRexysItem from "./AccountRexysItem";

function AccountRexys({ content }) {
  const { rexyMovies, rexyShows } = content;
  return (
    <div className="rexys">
      <div className="movies">
        <h2>Movies</h2>
        {rexyMovies &&
          rexyMovies.map((item) => {
            return (
              <AccountRexysItem key={item.id} item={item} type={"movie"} />
            );
          })}
      </div>
      <div className="shows">
        <h2>Shows</h2>
        {rexyShows &&
          rexyShows.map((item) => {
            return <AccountRexysItem key={item.id} item={item} type={"show"} />;
          })}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    content: state.userContentList,
  };
};
export default connect(mapStateToProps)(AccountRexys);
