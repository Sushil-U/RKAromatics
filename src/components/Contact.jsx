import React, { useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".contact-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="contact-page">
      <section className="contact-header contact-section">
        <h1>Contact Us</h1>
        <p>
          We’d love to hear from you! Whether you have a question about our
          products, services, or rental plans — our team is here to help.
        </p>
      </section>

      <section className="contact-content contact-section">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            <strong>Phone 1:</strong> +91 895 787 5050 (for sales and support)
          </p>
          <p>
            <strong>Phone 2:</strong> +91 993 407 0523 (for complaints)
          </p>
          <p>
            <strong>Phone 3:</strong> +91 639 315 0513 (for general query)
          </p>
          <p>
            <strong>Email:</strong> info@rozerscents.com
          </p>
          <p>
            <strong>Head Office:</strong> Rozerscents Hygiene Pvt. Ltd. <br />
            25-B Industrial Area, Sector 68, Gurugram, Haryana, India – 122001
          </p>
          <p>
            <strong>Working Hours:</strong> Mon–Sun, 9:00 AM – 7:00 PM
          </p>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
