import { POSTER_URL } from "../constants";

function AccountRexysItem({ item }) {
    return (
        <div className="account-item">
        <div className="poster">
          {item.backdrop_path !== null ? (
            <img src={`${POSTER_URL}${item.backdrop_path}`} alt="poster" />
          ) : (
            <img src="../../images/unavailable_poster.jpeg" alt="poster" />
          )}
        </div>
        <div className="text">
          <h3>{item.title || item.name}</h3>
        </div>
        {/* <UserContentActionBar
          handleRating={handleRating}
          handleSend={handleSend}
          handleRemove={handleRemove}
          item={item}
        /> */}
      </div>
    );
};
export default AccountRexysItem;