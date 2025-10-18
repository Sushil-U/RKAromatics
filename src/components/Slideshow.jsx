import React, { useEffect, useState } from "react";
import "./Slideshow.css";

const Slideshow = () => {
  const images = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slideshow-container">
      {images.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}
    </div>
  );
};

export default Slideshow;