import User from "./User";

function AccountFriends({ friends, type }) {
  return (
    <div className="friends">
      <h2>{type}</h2>
      {friends &&
        friends.map((friend) => {
          return <User key={friend.user_id} user={friend} />;
        })}
    </div>
  );
}
export default AccountFriends;
