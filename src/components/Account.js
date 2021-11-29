import { connect } from "react-redux";
import { findMovieById } from "../actions";
import { useEffect } from "react";

import Profile from "./Profile";

function Account(props) {
    const { dispatch, rexyIDs, rexys } = props;

    useEffect(() => {
        rexyIDs.forEach(id => {
           dispatch(findMovieById(id));
        });
    },[]);

    // useEffect(() => {
  //   axiosAuthorization()
  //     .get("/3/movie/550")
  //     .then(res => setMovie(res.data))
  //     .catch(err => console.log(err))
  // },[])

    return (
        <div className="account">
            <Profile/>
            {/* {rexys && rexys.movies.map(movie => <Item item={movie} category="movie"/>)} */}

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