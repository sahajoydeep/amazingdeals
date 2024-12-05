import Products from "./Products";
import "./App.css";


function App (){
  return (
    <div>
      <header>
        <nav className="navbar">
          <h1>Amazon India Deals</h1>
          <ul className="nav-links">
            <li>
              <a href="#recommended">Recommended</a>
            </li>
            <li>
              <a href="#reviews">Reviews</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>
    <Products />
      <footer className="footer">
        <p>2024 Amazon India Deals &copy; All rights reserved.</p>
        <p>By Joydeep Saha</p>
      </footer>
    </div>
  );
};

export default App;