function Card({ movie, onSelect }) {
  return (
    <div className="movie-card" onClick={() => onSelect(movie.imdbID)}>
  <img
    src={movie.Poster !== "N/A" ? movie.Poster : "no-image.jpg"}
    alt={movie.Title}
  />

  <div className="movie-card-content">
    <h3>{movie.Title}</h3>
    <p>{movie.Year}</p>
    <p>{movie.Type}</p>
  </div>
</div>
  );
}

export default Card;