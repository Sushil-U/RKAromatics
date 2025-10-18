import React, { useEffect, useRef, useState } from "react";
import "./Mission.css";

const Mission = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="mission-section" ref={containerRef}>
      <div className={`mission-left ${isVisible ? "slide-in-left" : ""}`}>
        Our mission is to make every breathing experience feel luxurious and memorable.
      </div>
      <div className={`mission-right ${isVisible ? "slide-in-right" : ""}`}>
        We carefully curate products that combine elegance, quality, and style, so you feel exceptional with every purchase.
      </div>
    </section>
  );
};

export default Mission;
