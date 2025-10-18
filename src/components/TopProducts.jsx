import React, { useState } from "react";
import "./TopProducts.css";

const TopProducts = () => {
  const [activeProduct, setActiveProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Royal Perfume",
      price: "Rs.1199",
      image: "/images/product1.jpg",
    },
    {
      id: 2,
      name: "Blossom Scent",
      price: "Rs.999",
      image: "/images/product2.jpg",
    },
    {
      id: 3,
      name: "GYPSY Essential",
      price: "Rs.899",
      image: "/images/product3.jpg",
    },
    {
      id: 4,
      name: "Drip Nation",
      price: "Rs. 1379",
      image: "/images/product4.jpg",
    },
  ];

  const handleProductClick = (id) => {
    setActiveProduct((prev) => (prev === id ? null : id)); // toggle
  };

  return (
    <section className="top-products-section">
      <h2 className="top-products-title">Top Products</h2>
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
              <button className="buy-now-btn">Buy Now</button>
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
