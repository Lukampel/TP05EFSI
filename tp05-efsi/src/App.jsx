import { useState } from "react";
import SearchBar from "./componentes/SearchBar";
import MovieList from "./componentes/MovieList";
import MovieDetail from "./componentes/MovieDetail";
import ErrorMessage from "./componentes/ErrorMessage";
import { searchMovies, getMovieById } from "./servicios/api";
import Cargando from "./componentes/Cargando";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (query) => {
    setLoading(true);
    setError("");
    setSelected(null);

    try {
      const data = await searchMovies(query);

      if (data.Response === "False") {
        setMovies([]);
      } else {
        setMovies(data.Search);
      }
    } catch (err) {
      setError("Error al buscar");
    }

    setLoading(false);
  };

  const handleSelect = async (id) => {
    setLoading(true);

    try {
      const data = await getMovieById(id);
      setSelected(data);
    } catch {
      setError("Error al obtener detalle");
    }

    setLoading(false);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      {loading && <Cargando />}
      {error && <ErrorMessage message={error} />}

      {!loading && !selected && (
        <MovieList movies={movies} onSelect={handleSelect} />
      )}

      {selected && <MovieDetail movie={selected} />}
    </div>
  );
}

export default App;