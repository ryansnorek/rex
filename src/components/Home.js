import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { discoverContent, findContentById } from "../actions";
import HomeItem from "./HomeItem";

function Home({ dispatch, discover }) {
    const { movies, tvShows, trending } = discover;

    const [discoverItems, setDiscoverItems] = useState([]);
    const [discoverType, setDiscoverType] = useState("");

    const [trendingIsActive, setTrendingIsActive] = useState(true);
    const [movieIsActive, setMovieIsActive] = useState(false);
    const [tvIsActive, setTvIsActive] = useState(false);

    const handleClickTrending = () => {
        setTrendingIsActive(true);
        setMovieIsActive(false);
        setTvIsActive(false);
        dispatch(discoverContent("trending"));
    };
    const handleClickMovies = () => {
        setTrendingIsActive(false);
        setMovieIsActive(true);
        setTvIsActive(false);
        dispatch(discoverContent("movie"));
    };
    const handleClickTV = () => {
        setTrendingIsActive(false);
        setMovieIsActive(false);
        setTvIsActive(true);
        dispatch(discoverContent("tv"));
    };

    const navigate = useNavigate();
    const handleClickPoster = (id, type) => {
        dispatch(findContentById(id, type));
        setTimeout(() => navigate(`/item/${id}`), 100);
    };

    useEffect(() => {
        if (trending) {
            setDiscoverItems(trending);
            setDiscoverType("trending");
        } else if (movies) {
            setDiscoverItems(movies);
            setDiscoverType("movie");
        } else if (tvShows) {
            setDiscoverItems(tvShows);
            setDiscoverType("tv");
        }
    },[handleClickMovies, handleClickTV, handleClickPoster])

    useEffect(() => dispatch(discoverContent("trending")),[]);

    return (
        <div className="home page">
            <div className="toggle-bar">
                <nav>
                    <button 
                        className={"navlink" + (trendingIsActive ? " activated" : "")} 
                        onClick={handleClickTrending}>
                            Trending
                    </button>
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