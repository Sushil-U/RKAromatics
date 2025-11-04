import React, { useEffect, useRef, useState } from "react";
import "./Clients.css";

const Clients = () => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // animate only once
        }
      },
      { threshold: 0.3 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const clientLogos = [
    "/images/company1.png",
    "/images/company2.png",
    "/images/company3.png",
    "/images/company4.png",
    "/images/company5.png",
  ];

  return (
    <section className="clients-section">
      <h2 className="gradient-title">Our Clients</h2>
      <p
        ref={textRef}
        className={`clients-text ${isVisible ? "slide-in" : ""}`}
      >
        We take pride in serving a diverse group of clients across
        the globe. From small businesses and local artisans to well-known
        retail brands, our clients trust us to deliver high-quality products and
        seamless online shopping experiences. We focus on building long-term
        relationships through innovation, transparency, and exceptional
        customer support. Our growing community of loyal customers motivates us
        every day to improve and expand our offerings, ensuring that every
        shopping journey is smooth, enjoyable, and rewarding.
      </p>

      <div className={`client-logos ${isVisible ? "fade-in" : ""}`}>
        {clientLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Client ${index + 1}`}
            className="client-logo"
          />
        ))}
      </div>
    </section>
  );
};

export default Clients;
