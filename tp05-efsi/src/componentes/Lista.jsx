import Card from "./Card";

function Lista({ movies, onSelect }) {
  if (movies.length === 0) {
    return <p>No hay resultados</p>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default Lista;