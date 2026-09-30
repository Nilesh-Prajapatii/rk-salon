import "./Contact.css";

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-container">

                {/* Section Heading */}
                <div className="contact-heading">
                    <p>CONTACT US</p>

                    <h2>We'd Love to Hear From You</h2>

                    <span>
                        Have questions about R K Salon? Get in touch with us.
                    </span>
                </div>

                {/* Contact Content */}
                <div className="contact-content">

                    {/* Left Side */}
                    <div className="contact-info">
                        <h3>Get In Touch</h3>

                        <div className="contact-item">
                            <div className="contact-icon">📍</div>

                            <div>
                                <h4>Address</h4>
                                <p>R K Salon</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">📞</div>

                            <div>
                                <h4>Phone</h4>
                                <p>+91 XXXXX XXXXX</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">✉</div>

                            <div>
                                <h4>Email</h4>
                                <p>info@rksalon.com</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">🕐</div>

                            <div>
                                <h4>Opening Hours</h4>
                                <p>Mon - Sun</p>
                                <p>10:00 AM - 8:00 PM</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="contact-form">
                        <h3>Send Us a Message</h3>

                        <form>

                            <div className="form-group">
                                <label htmlFor="contact-name">Name</label>

                                <input
                                    type="text"
                                    id="contact-name"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="contact-email">Email</label>

                                <input
                                    type="email"
                                    id="contact-email"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="contact-message">Message</label>

                                <textarea
                                    id="contact-message"
                                    placeholder="Write your message..."
                                    rows="5"
                                ></textarea>
                            </div>

                            <button type="submit" className="contact-button">
                                Send Message
                            </button>

                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Contact;