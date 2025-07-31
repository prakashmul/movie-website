import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hindi from "./pages/Hindi";
import Nepali from "./pages/Nepali";
import English from "./pages/English";
import Home from "./pages/Home"; 
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/hindi" element={<Hindi />} />
        <Route path="/nepali" element={<Nepali />} />
        <Route path="/english" element={<English />} />
      </Routes>
    </Router>
  );
}

export default App;