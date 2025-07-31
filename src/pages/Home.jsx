import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>🎬 Welcome to MovieZone</h1>
      <div className="movie-boxes">
        <Link to="/hindi" className="movie-box">
          <h2>Hindi<br />Movies</h2>
        </Link>
        <Link to="/nepali" className="movie-box">
          <h2>Nepali<br />Movies</h2>
        </Link>
        <Link to="/english" className="movie-box">
          <h2>English<br />Movies</h2>
        </Link>
      </div>
    </div>
  );
}

export default Home;
