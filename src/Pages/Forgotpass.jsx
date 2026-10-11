import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/RK-sallon-logo.jpeg";
import "./Forgotpass.css";

function ForgotPassword() {

  const handleForget = (e) => {
    e.preventDefault();

    console.log("Reset link requested");
  };

  return (
    <div className="forgot-page">

      <div className="forgot-box">

        {/* ================= LEFT SIDE ================= */}
        <div className="forgot-left">

          <div className="forgot-logo">
            <img src={logo} alt="RK Salon" />
          </div>

          <div className="forgot-left-content">

            <p className="small-title">
              NEED HELP?
            </p>

            <h1>
              Reset Your
              <br />
              Password.
            </h1>

            <p className="forgot-description">
              Enter your email address and we'll send you
              a link to reset your password.
            </p>

          </div>

        </div>


        {/* ================= RIGHT SIDE ================= */}
        <div className="forgot-right">

          <h2>
            Forgot Password?
          </h2>

          <p className="forgot-subtitle">
            Enter your email to reset your password
          </p>


          <form onSubmit={handleForget}>

            {/* EMAIL */}
            <div className="form-group">

              <label>
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                required
              />

            </div>


            {/* BUTTON */}
            <button
              type="submit"
              className="forgot-button"
            >
              Send Reset Link
            </button>

          </form>


          {/* BACK TO LOGIN */}
          <div className="back">

            <span>
              Remember your password?
            </span>

            <Link to="/login">
              Back to Login
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ForgotPassword;