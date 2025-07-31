import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2><Link to='/'>🎬 MovieZone</Link></h2>
      <ul>
        <li><Link to="/hindi">Hindi</Link></li>
        <li><Link to="/nepali">Nepali</Link></li>
        <li><Link to="/english">English</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
