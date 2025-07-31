import MovieCard from "./MovieCard";
import "./MovieList.css";

function MovieList({ movies, title }) {
  return (
    <div className="section">
      <h2>{title}</h2>
      <div className="movie-grid">
        {movies.length ? (
          movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
}

export default MovieList;