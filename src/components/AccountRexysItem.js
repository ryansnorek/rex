import { createPoster } from "../helper";

function AccountRexysItem({ item }) {
  return (
    <div className="account-item">
      <div className="poster">
        <img
          className="temp-placeholder"
          src={createPoster(item.backdrop_path)}
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
