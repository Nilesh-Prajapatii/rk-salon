import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import About from "./Components/About";
import Contact from "./Components/Contact";

import Login from "./Pages/Login";
import Register from "./Pages/Register";

import Dashboard from "./Pages/Admin/Dashboard";
import UserDashboard from "./Pages/User/UserDashboard";

import "./App.css";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Dashboard */}
        <Route
          path="/admin-dashboard"
          element={<Dashboard />}
        />

        {/* User Dashboard */}
        <Route
          path="/user-dashboard"
          element={<UserDashboard />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;