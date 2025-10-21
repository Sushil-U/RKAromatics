import React, { useEffect } from "react";
import "./About.css";

const About = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".about-section");

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
    <div className="about-page">
      <section className="about-intro about-section">
        <h1>About Us</h1>
        <h2>Redefining Hygiene, Luxury, and Comfort Across India</h2>
        <p>
          Welcome to <strong>Rozerscents</strong>, Powered by (R.K.Aromatics),az India’s leading provider of
          premium hygiene services and equipment for corporates, airports,
          hospitals, banquets, and commercial spaces. We are committed to
          creating cleaner, safer, and more luxurious environments — because
          hygiene is not just a necessity, it’s a lifestyle.
        </p>
      </section>

      <section className="about-vision about-section">
        <h2>Our Vision</h2>
        <p>
          To become India’s most trusted name in professional hygiene management
          by combining technology, innovation, and affordability — ensuring
          every workplace remains safe, elegant, and infection-free.
        </p>
      </section>

      <section className="about-services about-section">
        <h2>Our Services</h2>

        <div className="service">
          <h3>1. Complete Hygiene Management</h3>
          <p>
            We offer professional hygiene maintenance for corporate offices,
            airports, banquets, hospitals, showrooms, and educational
            institutions. Our teams ensure spotless cleanliness, regular
            sanitisation, and fragrance-rich environments that leave a lasting
            impression.
          </p>
        </div>

        <div className="service">
          <h3>2. Sanitary pad vending machine (We care Women)</h3>
          <h2>
            We understand that women value their privacy, especially 
            when it comes to menstrual hygiene. Many women feel uncomfortable 
            asking male staff or vendors for sanitary pads. 
            </h2>
            <p>
            To address this concern, we have introduced our Sanitary Pad Vending Machine,
             designed to provide complete privacy and convenience. This machine ensures 
             that women can access sanitary pads discreetly, without the need for interaction.
            It features sensor-based and UPI-enabled dispensing technology, allowing
             completely touch-free and cashless operation.
            </p>
            <p>
            At Rozerscents, we care deeply about women’s comfort and 
            dignity — that’s why installing a sanitary pad vending machine in 
            every female washroom is not just important, but essential.
          </p>
        </div>

        <div className="service">
          <h3>3. Hygiene Product Rental Plans (1–3 Year Agreements)</h3>
          <p>
            We understand that not every business wants to invest heavily in
            hygiene equipment upfront — that’s why we introduced our Hygiene
            Equipment Rental Programme. Now you can rent our premium hygiene
            products on flexible contracts (1 to 3 years) with complete
            maintenance, refilling, and service support included.
          </p>
          <p>
            Our rental catalogue includes: Automatic Soap Dispensers,
            Sensor-Based Air Freshener Dispensers, Aroma Diffusers (for small &
            large areas), Sanitary Pad Disposal Units, Hand Dryers & Tissue
            Dispensers.
          </p>
        </div>

        <div className="service">
          <h3>4. Dranoscopy & Restroom Safety Treatments</h3>
          <p>
            We provide dranoscopy and deep restroom cleaning services designed
            to eliminate uric acid deposits, foul odour, and bacterial
            infections, reducing risks of UTI and viral spread. Our specialised
            disinfectants and tools ensure every restroom remains fresh,
            germ-free, and pleasant.
          </p>
        </div>

        <div className="service">
          <h3>5. Women’s Sanitary Disposal Solutions</h3>
          <p>
            Our Feminine Hygiene Unit is an innovative sanitary pad disposal
            system designed for privacy, safety, and long-lasting freshness. It
            contains sanitizer for odour and germ control, keeps used pads safe
            for up to one month, and ensures hygiene and comfort for female
            staff.
          </p>
        </div>

        <div className="service">
          <h3>6. Premium Fragrance & Aroma Solutions</h3>
          <p>
            We provide a full range of fragrance dispensers and aroma diffusers
            tailored for different spaces — from small cabins to large lobbies.
            Our luxury-grade fragrance oils offer a long-lasting royal aroma,
            made from safe, non-toxic ingredients that enhance your environment
            and brand image.
          </p>
        </div>
      </section>

      <section className="about-why about-section">
        <h2>Why Choose Rozerscents</h2>
        <ul>
          <li>✔ 100+ Hygiene Products & Services</li>
          <li>✔ Rental Options (1–3 Years) with Maintenance Support</li>
          <li>✔ Automatic, Sensor-Based Devices</li>
          <li>✔ Safe, Eco-Friendly & Non-Toxic Formulations</li>
          <li>✔ Nationwide Presence & Reliable After-Sales Service</li>
          <li>✔ Customised Hygiene Plans for Every Business Type</li>
        </ul>
      </section>

      <section className="about-mission about-section">
        <h2>Our Mission</h2>
        <p>
          To protect lives and uplift workplaces by providing luxury-grade
          hygiene solutions that ensure safety, comfort, and confidence —
          wherever people work, meet, or travel.
        </p>
      </section>

      <section className="about-footer about-section">
        <h2>Experience the Future of Hygiene</h2>
        <p>
          At <strong>Rozerscents</strong>, we don’t just maintain hygiene — we
          create environments that breathe freshness, safety, and elegance.
          Partner with us for a hygienic, infection-free, and aromatic workplace
          — because true luxury begins with cleanliness.
        </p>
      </section>
    </div>
  );
};

export default About;
