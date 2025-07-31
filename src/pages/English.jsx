import movies from "../data/movies";
import MovieList from "../components/MovieList";

function English() {
  const englishMovies = movies.filter(m => m.language === "English");
  const trending = englishMovies.filter(m => m.trending);
  const coming2025 = englishMovies.filter(m => m.year === 2025);

  return (
    <div>
      <MovieList title="All English Movies" movies={englishMovies} />
      <MovieList title="🔥 Trending in English" movies={trending} />
      <MovieList title="🎬 Coming in 2025 (English)" movies={coming2025} />
    </div>
  );
}

export default English;