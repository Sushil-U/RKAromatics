import React, { useState, useEffect } from "react";
import "./Products.css";
import ProductSlideshow from "./ProductSlideshow";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expanded, setExpanded] = useState({}); // ✅ Track which product is expanded

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch product data");
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="products-page">
      <h1 className="products-title">Our Products</h1>

      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            const images = Object.keys(product)
              .filter((key) => key.startsWith("image"))
              .map((key) => product[key])
              .filter(Boolean);

            const isExpanded = expanded[product.id];

            return (
              <div key={product.id} className="product-card">
                {images.length > 0 && <ProductSlideshow images={images} />}

                <h3>{product.name}</h3>
                <p className="product-category">{product.category}</p>

                {/* ✅ Truncated description */}
                <p
                  className={`product-description ${
                    isExpanded ? "expanded" : ""
                  }`}
                >
                  {product.description}
                </p>

                {product.description.length > 120 && (
                  <button
                    className="see-more-btn"
                    onClick={() => toggleExpand(product.id)}
                  >
                    {isExpanded ? "See Less" : "See More"}
                  </button>
                )}

                <span className="price">{product.price}</span>
              </div>
            );
          })
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
