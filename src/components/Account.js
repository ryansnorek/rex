import { connect } from "react-redux";
import { findContentById } from "../actions";
import { useEffect } from "react";

import AccountProfile from "./AccountProfile";
import AccountRexy from "./AccountRexy";

function Account({ dispatch, rexyIDs, rexys }) {

    useEffect(() => rexyIDs.forEach(id => dispatch(findContentById(id, "movie", "rexy"))), []);

    return (
        <div className="account page">
            <AccountProfile/>
            {rexys.movies !== [] && rexys.movies.map(movie => <AccountRexy item={movie}/>)}
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