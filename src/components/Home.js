import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { discoverContent, findContentById } from "../actions";
import { POSTER_URL } from "../constants";

function Home({ dispatch, discover }) {
    const navigate = useNavigate();

    useEffect(() => dispatch(discoverContent("movie")),[]);

    const handleClickMovies = () => dispatch(discoverContent("movie"));
    const handleClickTV = () => dispatch(discoverContent("tv"))

    const handleClickPoster = (id, type) => {
        dispatch(findContentById(id, type));
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
            {/* discover content component - pass in handlers */}
            <div className="discover">
                {discover.movies && discover.movies.map(movie => {
                    return (
                        <div className="discover-item" onClick={() => handleClickPoster(movie.id, "movie")}>
                            {movie.poster_path ? <img src={`${POSTER_URL}${movie.poster_path}`} alt="poster"/> : <img src="../../images/unavailable_poster.jpeg" alt="poster" />}
                        </div>
                    );
                })}
                {discover.tvShows && discover.tvShows.map(show => {
                    return (
                        <div className="discover-item" onClick={() => handleClickPoster(show.id, "tv")}>
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