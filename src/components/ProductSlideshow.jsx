import React, { useEffect, useRef, useState } from "react";
import "./ProductSlideshow.css";

const ProductSlideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideshowRef = useRef(null);

  // Auto slide every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Scroll to current image
  useEffect(() => {
    if (slideshowRef.current) {
      slideshowRef.current.scrollTo({
        left: slideshowRef.current.offsetWidth * currentIndex,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="product-slideshow" ref={slideshowRef}>
      {images.map((img, i) => (
        <div
          key={i}
          className="product-slide"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}
    </div>
  );
};

export default ProductSlideshow;
