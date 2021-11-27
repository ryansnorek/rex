export default function Item({ item, category }) {
    return (
        <div className="item">
            <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="item" />
            <div className="text">
                {category === "tv" ? <h3>{item.original_name}</h3> : <h3>{item.title}</h3>}
                <p>{item.overview}</p>
                {category ==="tv" ? <p>First aired: {item.first_air_date}</p> : <p>Release date: {item.release_date}</p>}
            </div>
        </div>
    )
}