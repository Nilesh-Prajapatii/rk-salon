import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {

  const navigate = useNavigate();

  return (
    <section id="home" className="hero" >
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-subtitle">WELCOME TO RK SALON</p>

          <h1>
            Manage Your Salon
            <span> Smarter & Easier</span>
          </h1>

          <p className="hero-description">
            RK Salon is a modern salon management system that helps you
            manage appointments, customers, employees, billing, inventory,
            and reports in one place.
          </p>
          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/login")}
            >
              Book Appointment
            </button>

            <a href="#services" className="secondary-btn">
              Explore Services
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="dashboard-placeholder">
            <h3>RK Salon</h3>
            <p>Salon Management Dashboard</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

