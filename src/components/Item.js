export default function Item({ item }) {
    return (
        <div className="item">
            <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="item" />
            <h3>{item.title}</h3>
            <p>{item.tagline}</p>
            <p>{item.overview}</p>
        </div>
    )
}