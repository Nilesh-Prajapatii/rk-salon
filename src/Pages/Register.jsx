import { Link } from "react-router-dom";
import "./Register.css";

function Register () {
  return (
    <div className="register-page">

      <div className="register-container">

        <div className="register-header">
          <div className="register-logo">
            RK <span>SALON</span>
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

            <form>

              <div className="register-row">

                <div className="register-input">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="First name"
                  />
                </div>

                <div className="register-input">
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Last name"
                  />
                </div>

              </div>

              <div className="register-input">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="register-input">
                <label>Mobile Number</label>
                <input
                  type="tel"
                  placeholder="Enter mobile number"
                />
              </div>

              <div className="register-row">

                <div className="register-input">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Create password"
                  />
                </div>

                <div className="register-input">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm password"
                  />
                </div>

              </div>

              <label className="register-terms">
                <input type="checkbox" />

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
};

export default Register;