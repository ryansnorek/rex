import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { discoverContent, findMovieById } from "../actions";
import { POSTER_URL } from "../constants";

function Home({ dispatch, discover }) {
    const navigate = useNavigate();

    useEffect(() => dispatch(discoverContent("movie")),[]);

    const handleClickMovies = () => dispatch(discoverContent("movie"));
    const handleClickTV = () => dispatch(discoverContent("tv"))

    const handleClick = id => {
        dispatch(findMovieById(id));
        setTimeout(() => navigate(`/item/${id}`), 100);
    };
    return (
        <div className="home page">
            <div className="toggle-bar">
                <nav>
                    <button onClick={handleClickMovies}>Movies</button>
                    <button onClick={handleClickTV}>TV Shows</button>
                </nav>
            </div>
            <div className="discover">
                {discover.movies && discover.movies.map(movie => {
                    return (
                        <div className="discover-item" onClick={() => handleClick(movie.id)}>
                            {movie.poster_path ? <img src={`${POSTER_URL}${movie.poster_path}`} alt="poster"/> : <img src="../../images/unavailable_poster.jpeg" alt="poster" />}
                        </div>
                    );
                })}
                {discover.tvShows && discover.tvShows.map(show => {
                    return (
                        <div className="discover-item" onClick={() => handleClick(show.id)}>
                            {show.poster_path ? <img src={`${POSTER_URL}${show.poster_path}`} alt="poster"/> : <img src="../../images/unavailable_poster.jpeg" alt="poster" />}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
const mapStateToProps = (state) => ({ discover: state.discover });
export default connect(mapStateToProps)(Home);