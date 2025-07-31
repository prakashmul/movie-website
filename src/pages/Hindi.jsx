import movies from "../data/movies";
import MovieList from "../components/MovieList";

function Hindi() {
  const hindiMovies = movies.filter(m => m.language === "Hindi");
  const trending = hindiMovies.filter(m => m.trending);
  const coming2025 = hindiMovies.filter(m => m.year === 2025);

  return (
    <div>
      <MovieList title="All Hindi Movies" movies={hindiMovies} />
      <MovieList title="🔥 Trending in Hindi" movies={trending} />
      <MovieList title="🎬 Coming in 2025 (Hindi)" movies={coming2025} />
    </div>
  );
}

export default Hindi;