export default function Item({ item, category }) {
    return (
        <div className="item">
            <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="item" />
            <div className="text">
                {category === "tv" ? <h2>{item.original_name}</h2> : <h2>{item.title}</h2>}
                <p>{item.overview}</p>
                {category ==="tv" ? <p>First aired: {item.first_air_date}</p> : <p>Release date: {item.release_date}</p>}
            </div>
        </div>
    )
}