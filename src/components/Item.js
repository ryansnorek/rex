export default function Item({ item, category }) {
    return (
        <div className="item">
            {item.poster_path ? <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="poster"/> : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2kjzLg9BzACM4Dibtz-bHQrtXKzdyEWhvzw&usqp=CAU" alt="poster" />}
            <div className="text">
                {category === "tv" ? <h2>{item.original_name}</h2> : <h2>{item.title}</h2>}
                {item.overview ? <p className="overview">{item.overview}</p> : <p>Description unavailable</p>}
                {category ==="tv" ? <p>First aired: {item.first_air_date}</p> : <p>Release date: {item.release_date}</p>}
                <button>Rexy</button>
            </div>
        </div>
    )
}