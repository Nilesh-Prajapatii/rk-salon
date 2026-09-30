import "./Services.css";

function Services() {
  const services = [
    {
      id: 1,
      title: "Hair Cut",
      description: "Professional haircuts tailored to your style.",
    },
    {
      id: 2,
      title: "Hair Spa",
      description: "Relax and refresh your hair with our spa treatment.",
    },
    {
      id: 3,
      title: "Hair Coloring",
      description: "Give your hair a fresh and vibrant look.",
    },
    {
      id: 4,
      title: "Facial",
      description: "Refresh and nourish your skin with our facial treatments.",
    },
    {
      id: 5,
      title: "Makeup",
      description: "Professional makeup for your special occasions.",
    },
    {
      id: 6,
      title: "Manicure / Pedicure",
      description: "Complete care for your hands, feet, and nails.",
    },
  ];

  return (
    <section className="services" id="services" >
      <div className="services-container">

        <div className="services-heading">
          <p>OUR SERVICES</p>
          <h2>Services We Provide</h2>
          <span>
            Take care of your style and beauty with our professional salon
            services.
          </span>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">
                ✂
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;