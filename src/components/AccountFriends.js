import User from "./User";

export default function AccountFriends({ friends }) {
  return (
    <div className="friends">
      {friends &&
        friends.map((friend) => {
          return <User key={friend.user_id} user={friend} />;
        })}
    </div>
  );
}
