import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getQueryResults, discoverMovies } from "../actions";
import { POSTER_URL } from "../constants";

function Home({ dispatch, discover, isFetching }) {

    useEffect(() => dispatch(discoverMovies()),[]);

    return (
        <div className="home">
            <div className="discover">
                {discover && discover.map(movie => {
                    return (
                        <div className="discover-item">
                            {movie.poster_path ? <img src={`${POSTER_URL}${movie.poster_path}`} alt="poster"/> : <img src="../../images/unavailable_poster.jpeg" alt="poster" />}
                        </div>
                    )
                })}
            </div>
        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        discover: state.discover,
        isFetching: state.isFetching
    }
}
export default connect(mapStateToProps)(Home);