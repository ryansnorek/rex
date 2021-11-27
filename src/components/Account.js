import { connect } from "react-redux";
import { findMovieById } from "../actions";
import { useEffect } from "react";
import Item from "./Item";

function Account(props) {
    const { dispatch, rexyIDs, rexys } = props;

    useEffect(() => {
        rexyIDs.forEach(id => {
           dispatch(findMovieById(id));
        });
    },[]);


    return (
        <div className="account">
            <h1>Account</h1>
            {rexys && rexys.movies.map(movie => <Item item={movie} category="movie"/>)}

        </div>
    )
}

const mapStateToProps = (state) => {
    return { 
            rexyIDs: state.rexyIDs,
            rexys: state.rexys 
        }
};
export default connect(mapStateToProps)(Account);