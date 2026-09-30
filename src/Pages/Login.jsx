import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [loginType, setLoginType] = useState("user");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (loginType === "admin") {
      navigate("/admin-dashboard");
    } else {
      navigate("/user-dashboard");
    }
  };

  return (
    <div className="login-page">

      <div className="login-box">

        {/* ================= LEFT SIDE ================= */}
        <div className="login-left">

          <div className="login-logo">
            <strong>RK</strong> SALON
          </div>

          <div className="left-content">
            <p className="welcome-text">WELCOME BACK</p>

            <h1>
              Your Style,
              <br />
              Our Expertise.
            </h1>

            <p className="left-description">
              Manage your appointments and continue your beauty
              journey with RK Salon.
            </p>
          </div>

        </div>


        {/* ================= RIGHT SIDE ================= */}
        <div className="login-right">

          <h2>Welcome Back!</h2>

          <p className="login-subtitle">
            {loginType === "user"
              ? "Login to your RK Salon account"
              : "Login to your RK Salon admin account"}
          </p>


          {/* USER / ADMIN TABS */}
          <div className="login-tabs">

            <button
              type="button"
              className={loginType === "user" ? "active" : ""}
              onClick={() => setLoginType("user")}
            >
              USER LOGIN
            </button>

            <button
              type="button"
              className={loginType === "admin" ? "active" : ""}
              onClick={() => setLoginType("admin")}
            >
              ADMIN LOGIN
            </button>

          </div>


          {/* LOGIN FORM */}
          <form onSubmit={handleLogin}>

            {/* EMAIL */}
            <div className="form-group">
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>


            {/* PASSWORD */}
            <div className="form-group">
              <label>Password</label>

              <div className="password-wrapper">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                />

              </div>
            </div>


            {/* SHOW PASSWORD */}
            <div className="show-password-option">

              <label>
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={(e) =>
                    setShowPassword(e.target.checked)
                  }
                />

                <span>Show Password</span>
              </label>
              
              <Link to="/forgot-password">
                Forgot Password?
              </Link>

            </div>


            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="login-button"
            >
              Login
            </button>

          </form>


          {/* OR */}
          <div className="bottom-login-section">

            <div className={`or-section ${loginType === "admin" ? "hidden-register" : ""} `}>
              <span></span>
              <p>OR</p>
              <span></span>
            </div>

            <div
              className={`register-section ${loginType === "admin" ? "hidden-register" : ""
                }`}
            >
              <span>Don't have an account?</span>

              <Link to="/register">
                Create Account
              </Link>
            </div>

          </div>


        </div>

      </div>

    </div>
  );
};

export default Login;