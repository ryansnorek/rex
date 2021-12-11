import { connect } from "react-redux";
import { useState } from "react";
import { getFriends } from "../actions";
import Friend from "./Friend";

function Friends(props) {
    const { dispatch, friends } = props;

    useState(() => {
        dispatch(getFriends())
        // console.log(friends)
    },[])
    return (
        <div className="friends page">
            {/* <h1>Friends page under construction</h1> */}
            {friends && friends.map(friend => <Friend friend={friend}/>)}
        </div>
    )
}
const mapStateToProps = (state) => ({ friends: state.friends });
export default connect(mapStateToProps)(Friends);