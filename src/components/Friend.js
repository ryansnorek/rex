export default function Friend({ user }) {
    return (
        <div className="friend">
            <div className="pic">
                <img src="../../images/blank_user.png" alt="profile-pic"/>
            </div>
            <div className="text">
                <h3>{user.username}</h3>
            </div>
            <div className="buttons-container">
                <button>Add friend</button>
            </div>
        </div>
    )
}