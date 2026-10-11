import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/RK-sallon-logo.jpeg"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="navlogo">
        <img src={logo} alt="RK Salon" />
        </div>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About Us</a>
          </li>

          <li>
            <a href="#services">Services</a>
          </li>

          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>

        <Link to="/login" className="nav-button">
          Get Started
        </Link>

      </div>
    </nav>

  );
}

export default Navbar;

