export default function Friend({ friend }) {
    return (
        <div className="friend">
            <div className="pic">
                <img src={friend.picture.medium} alt="pic"/>
            </div>
            <div className="text">
                <h3>{friend.first}</h3>
                <p>{friend.email}</p>
            </div>
        </div>
    )
}