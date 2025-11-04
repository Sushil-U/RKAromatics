import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./TopProducts.css";

const TopProducts = () => {
  const [activeProduct, setActiveProduct] = useState(null);

  const products = [
    {
      id: 9,
      name: "Car and Cabin Diffuser RK-0909",
      price: "₹4,299",
      image: "/images/product-id/10009/1.jpg",
    },
    {
      id: 3, 
      name: "Automatic Tower Diffuser FB-2311 (Black)",
      price: "₹16,999",
      image: "/images/product-id/10003/1.jpg",
    },
    {
      id: 4,
      name: "Smart Fragrance Diffuser BW-2712",
      price: "₹6,299",
      image: "/images/product-id/10004/1.jpg",
    },
    {
      id: 6,
      name: "Automatic Hand Dryer",
      price: "₹2,899",
      image: "/images/product-id/10006/1.jpg",
    },
  ];

  const handleProductClick = (id) => {
    setActiveProduct((prev) => (prev === id ? null : id)); // toggle
  };

  return (
    <section className="top-products-section">
      <h2 className="gradient-title">Top Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div
            className="product-card"
            key={product.id}
            onClick={() => handleProductClick(product.id)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>

            {activeProduct === product.id ? (
              <button className="buy-now-btn"><Link to={`/products/${product.id}`} className="view-details">View Details</Link></button>
            ) : (
              <p className="product-price">{product.price}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopProducts;
