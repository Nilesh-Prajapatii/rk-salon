import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/RK-sallon-logo.jpeg";
import "./Register.css";

function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    // Your registration/API logic can go here

    // Redirect to user dashboard
    navigate("/user-dashboard");
  };

  return (
    <div className="register-page">
      <div className="register-container">

        <div className="register-header">
          <div className="register-logo">
            <img src={logo} alt="RK Salon" />
          </div>

          <Link to="/login" className="register-login-link">
            Already have an account?
            <strong> Login</strong>
          </Link>
        </div>

        <div className="register-body">

          <div className="register-heading">
            <p>JOIN RK SALON</p>

            <h1>
              Create Your
              <br />
              Account
            </h1>

            <span>
              Register with us and enjoy a simple,
              personalized salon experience.
            </span>
          </div>

          <div className="register-form-card">

            <form onSubmit={handleRegister}>

              <div className="register-row">
                <div className="register-input">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="First name"
                    required
                  />
                </div>

                <div className="register-input">
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              <div className="register-input">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="register-input">
                <label>Mobile Number</label>
                <input
                  type="tel"
                  placeholder="Enter mobile number" maxLength="10" minLength="10" pattern="[0-9]{10}"
                  required
                />
              </div>

              <div className="register-row">
                <div className="register-input">
                  <label>Password</label>
                  <input type={showPassword ? "text" : "password"}
                    placeholder="Create password" required />
                </div>

                <div className="register-input">
                  <label>Confirm Password</label>
                  <input type={showPassword ? "text" : "password"}
                    placeholder="Confirm password" required />
                </div>
              </div>

              {/* Show Password */}
              <label className="register-show-password">
                <input type="checkbox"
                  checked={showPassword}
                  onChange={(e) => setShowPassword(e.target.checked)} />

                <span>Show Password</span>
              </label>

              <label className="register-terms">
                <input type="checkbox" required />

                <span>
                  I agree to the Terms & Conditions
                </span>
              </label>

              <button
                type="submit"
                className="register-button"
              >
                Create Account
              </button>

            </form>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Register;
