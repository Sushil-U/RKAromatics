import React, { useEffect, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [status, setStatus] = useState(""); // success | error | loading

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);

    try {
      // Replace YOUR_FORM_ID with your actual Formspree endpoint ID
      const response = await fetch("https://formspree.io/f/movkggrn", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
        setTimeout(() => setStatus(""), 3000); // hide after 3s
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

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
            <strong>Phone 1:</strong>{" "}
            <a href="tel:+918957875050" className="contact-link">
              +91 895-787-5050
            </a>{" "}
            (for general queries)
          </p>
          <p>
            <strong>Phone 2:</strong>{" "}
            <a href="tel:+919934070523" className="contact-link">
              +91 993-407-0523
            </a>{" "}
            (for complaints)
          </p>
          <p>
            <strong>Phone 3:</strong>{" "}
            <a href="tel:+916393150513" className="contact-link">
              +91 639-315-0513
            </a>{" "}
            (for sales and appointments)
          </p>
          <p>
            <strong>Email:  </strong>
            <a href="mailto:info@rozerscents.com?" target="_blank">
               info@rozerscents.com
            </a>
          </p>
          <p>
            <strong>Head Office:</strong> Rozerscents Hygiene Pvt. Ltd. <br />
            220, Jaina Tower, District Centre Janakpuri West, New Delhi, India – 110058
          </p>
          <p>
            <strong>Working Hours:</strong> Mon–Sun, 9:00 AM – 7:00 PM
          </p>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="send-btn"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* success / error messages */}
          {status === "success" && (
            <p className="success-message">✅ Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="error-message">❌ Something went wrong. Try again!</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
