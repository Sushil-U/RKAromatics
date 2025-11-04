import React, { useEffect, useRef, useState } from "react";
import "./ProductSlideshow.css";

const ProductSlideshow = ({ images = [] }) => {
  const slideshowRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // ✅ Always call hooks before conditionally returning
  const hasMultipleImages = images.length > 1;
  const loopImages = hasMultipleImages ? [...images, images[0]] : images;

  // Auto slide (only if more than one image)
  useEffect(() => {
    if (!hasMultipleImages) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2500); // every 2.5s

    return () => clearInterval(interval);
  }, [hasMultipleImages]);

  // Scroll effect
  useEffect(() => {
    if (!hasMultipleImages) return;

    const container = slideshowRef.current;
    if (!container) return;

    container.scrollTo({
      left: container.offsetWidth * currentIndex,
      behavior: isTransitioning ? "smooth" : "auto",
    });

    // Infinite looping logic
    if (currentIndex === loopImages.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 400);
    } else {
      setIsTransitioning(true);
    }
  }, [currentIndex, loopImages.length, isTransitioning, hasMultipleImages]);

  // ✅ Safe return at the bottom
  if (images.length === 0) return null;

  return (
    <div className="product-slideshow" ref={slideshowRef}>
      {loopImages.map((img, i) => (
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
