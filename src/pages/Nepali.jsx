import movies from "../data/movies";
import MovieList from "../components/MovieList";

function Nepali() {
  const nepaliMovies = movies.filter(m => m.language === "Nepali");
  const trending = nepaliMovies.filter(m => m.trending);
  const coming2025 = nepaliMovies.filter(m => m.year === 2025);

  return (
    <div>
      <MovieList title="All Nepali Movies" movies={nepaliMovies} />
      <MovieList title="🔥 Trending in Nepali" movies={trending} />
      <MovieList title="🎬 Coming in 2025 (Nepali)" movies={coming2025} />
    </div>
  );
}

export default Nepali;