import "./About.css";

function About  ()  {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Left Side - Images */}
        <div className="about-images">
          <div className="about-image image-one">
            <img
              src="/images/about-1.jpg"
              alt="RK Salon"
            />
          </div>

          <div className="about-image image-two">
            <img
              src="/images/about-2.jpg"
              alt="RK Salon Management"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="about-content">
          <p className="about-label">ABOUT US </p>

          <h2>
            Where Style Meets
            <br />
            Smart Management
          </h2>

          <p>
            RK Salon is a modern salon management system designed to
            simplify and organize everyday salon operations. It brings
            essential salon activities together through a single, 
            easy-to-manage platform.
          </p>

          <p>
            From appointments and customer profiles to employee management,
            services, billing, and inventory, RK Salon helps keep the
            important parts of salon operations organized in one place.
          </p>

          <p>
            The system is designed to reduce manual work and make daily
            management more efficient, allowing salon staff to focus more
            on providing a smooth experience for their customers.
          </p>

          <div className="about-features">
            <span>✓ Appointment Management</span>
            <span>✓ Customer Management</span>
            <span>✓ Employee Management</span>
            <span>✓ Billing & Inventory</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;