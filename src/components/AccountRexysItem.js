import { POSTER_URL, UNAVAILABLE } from "../constants";

function AccountRexysItem({ item }) {
  const poster = `${POSTER_URL}${item.backdrop_path}`;
  return (
    <div className="account-item">
      <div className="poster">
        <img
          className="temp-placeholder"
          src={poster || UNAVAILABLE}
          alt="poster"
        />
      </div>
      <div className="text">
        <h3>{item.title || item.name}</h3>
      </div>
      <div className="actions">
        <img className="icon" src="../../images/add.png" alt="add" />
        <img
          className="icon delete"
          src="../../images/close.png"
          alt="delete"
        />
      </div>
    </div>
  );
}
export default AccountRexysItem;
