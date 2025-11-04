import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetails.css";
import ProductSlideshow from "./ProductSlideshow";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => String(item.id) === id);
        setProduct(found);
      })
      .catch((err) => console.error("Error loading product:", err));
  }, [id]);

  if (!product) {
    return <div className="loading">Loading product details...</div>;
  }

  // Extract all images dynamically (image1, image2, etc.)
  const images = Object.keys(product)
    .filter((key) => key.startsWith("image"))
    .map((key) => product[key])
    .filter(Boolean);

  return (
    <div className="product-details-page">
      <div className="details-container">
        <div className="details-left">
          {images.length > 0 && <ProductSlideshow images={images} />}
        </div>

        <div className="details-right">
          <h1 className="details-title">{product.name}</h1>
          <p className="details-category">
            Category:{" "}
            {Array.isArray(product.category)
              ? product.category.join(", ")
              : product.category}
          </p>
          <p className="details-price">{product.price}</p>
          <p className="details-description">{product.description}</p>

          <Link to="/products" className="back-btn">
            ← Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
