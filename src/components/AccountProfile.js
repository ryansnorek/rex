import { connect } from "react-redux";
import { useState } from "react";

function AccountProfile({ friends }) {
    const [editMode, setEditMode] = useState(false);
    const [pic, setPic] = useState("../../images/profile_pic_small.jpg");
    const [input, setInput] = useState("");

    const handleEdit = () => setEditMode(!editMode);
    const handleChange = e => setInput(e.target.value);
    const handleChangePic = e => {
        e.preventDefault();
        setPic(input);
        setEditMode(false);
    };
    return (
        <div className="profile">
            <div className="text">
                <h3>Username</h3>
                <p>Tagline</p>
                {/* <p>Friends: {friends.length}</p> */}
                <p>Rexys: Deuce Bigalow, Deuce Bigalow, Deuce Bigalow</p>
            </div>
            <div className="pic">
                <img src={pic} alt="profile-pic"/>
                {editMode && 
                    <span>
                        <form onSubmit={handleChangePic}>
                            <label for="profile-pic">Select profile pic:</label>
                            <input onChange={handleChange} type="file" name="profile-pic" accept="image/*" value={input}/>
                            <button>select pic</button>
                        </form>
                    </span>}
            </div>
            <span onClick={handleEdit}>
                <button>Edit profile</button>
            </span>
        </div>
    )
}
const mapStateToProps = (state) => ({ friends: state.friends });
export default connect(mapStateToProps)(AccountProfile);