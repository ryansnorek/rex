import { POSTER_URL } from "../constants";

function HomeItem({ handleClickPoster, type, item }) {
    return (
        <div 
            className="discover-item" 
            onClick={() => handleClickPoster(item.id, type)}
        >
            {
            item.poster_path ? 
            <img src={`${POSTER_URL}${item.poster_path}`} alt="poster"/> : 
            <img src="../../images/unavailable_poster.jpeg" alt="poster" />
            }
        </div>
    );
};
export default HomeItem;