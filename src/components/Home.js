import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { discoverContent, findContentById } from "../actions";
import HomeItem from "./HomeItem";

function Home({ dispatch, discover }) {
    const { movies, tvShows } = discover;

    const [movieIsActive, setMovieIsActive] = useState(true);
    const [tvIsActive, setTvIsActive] = useState(false);

    const discoverItems = movies ? movies : tvShows;
    const discoverType = movies ? "movie" : "tv";

    const navigate = useNavigate();

    useEffect(() => dispatch(discoverContent("movie")),[]);

    const handleClickMovies = () => {
        setMovieIsActive(true);
        setTvIsActive(false);
        dispatch(discoverContent("movie"));
    };
    const handleClickTV = () => {
        setMovieIsActive(false);
        setTvIsActive(true);
        dispatch(discoverContent("tv"));
    };
    const handleClickPoster = (id, type) => {
        dispatch(findContentById(id, type));
        setTimeout(() => navigate(`/item/${id}`), 100);
    };
    return (
        <div className="home page">
            <div className="toggle-bar">
                <nav>
                    <button 
                        className={"navlink" + (movieIsActive ? " activated" : "")} 
                        onClick={handleClickMovies}>
                            Movies
                    </button>
                    <button 
                        className={"navlink" + (tvIsActive ? " activated" : "")} 
                        onClick={handleClickTV}>
                            TV Shows
                    </button>
                </nav>
            </div>
            <div className="discover">
                {discoverItems && 
                 discoverItems.map(item => {
                    return <HomeItem 
                            handleClickPoster={handleClickPoster} 
                            type={discoverType} 
                            item={item}
                            />
                })}
            </div>
        </div>
    );
};
const mapStateToProps = (state) => ({ discover: state.discover });
export default connect(mapStateToProps)(Home);