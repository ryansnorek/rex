import { POSTER_URL } from "../constants";

function AccountRexysItem({ item }) {
  return (
    <div className="account-item">
      <div className="poster">
        {item.backdrop_path !== null ? (
          <img className="temp-placeholder" src={`${POSTER_URL}${item.backdrop_path}`} alt="poster" />
        ) : (
          <img src="../../images/unavailable_poster.jpeg" alt="poster" />
        )}
      </div>
      <div className="text">
        <h3>{item.title || item.name}</h3>
      </div>
      <div className="actions">
      <img
          className="icon"
          src="../../images/add.png"
          alt="add"
        />
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
