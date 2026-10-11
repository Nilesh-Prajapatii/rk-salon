
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import About from "./Components/About";
import Contact from "./Components/Contact";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Forgotpass from "./Pages/Forgotpass";

import Dashboard from "./Pages/Admin/Dashboard";
import UserDashboard from "./Pages/User/UserDashboard";

import "./App.css";
import bgImage from "./assets/bg_image.jpeg";

function LandingPage() {
  return (
    <>
      <Helmet>
        <title>Your Salon Name | Hair & Beauty Services</title>

        <meta
          name="description"
          content="Discover professional hair styling, beauty treatments, and salon services at Your Salon Name."
        />

        <meta name="robots" content="index, follow" />
      </Helmet>

      <main
        className="landing-page"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<Forgotpass />} />

          <Route
            path="/admin-dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/user-dashboard"
            element={<UserDashboard />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
