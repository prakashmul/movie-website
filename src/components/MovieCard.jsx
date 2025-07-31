import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>Year: {movie.year}</p>
      {movie.trending && <span className="badge">🔥 Trending</span>}
    </div>
  );
}

export default MovieCard;