import User from "./User";

function AccountFriends({ friends }) {
  return (
    <div className="friends">
      {friends &&
        friends.map((friend) => {
          return <User key={friend.user_id} user={friend} />;
        })}
    </div>
  );
}
export default AccountFriends;