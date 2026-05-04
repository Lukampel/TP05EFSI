import MovieCard from "./MovieCard";

function MovieList({ movies, onSelect }) {
  if (movies.length === 0) {
    return <p>No hay resultados</p>;
  }

  return (
    <div>
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

export default MovieList;