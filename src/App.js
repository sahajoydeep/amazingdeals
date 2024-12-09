import Products from "./Products";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <nav className="navbar">
            <h1>Amazng India Deals</h1>
            <ul className="nav-links">
              <li>
                <a href="#recommended">Recommended</a>
              </li>
              <li>
                <a href="#reviews">Reviews</a>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>

        <footer className="footer">
          <p>2024 Amazon India Deals &copy; All rights reserved.</p>
          <p>By Joydeep Saha</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
