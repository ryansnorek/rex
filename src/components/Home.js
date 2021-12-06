import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { discoverContent, findContentById } from "../actions";
import HomeItem from "./HomeItem";

function Home({ dispatch, discover }) {
    const { movies, tvShows } = discover;

    const discoverItems = movies ? movies : tvShows;
    const discoverType = movies ? "movie" : "tv";

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