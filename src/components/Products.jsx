import React, { useState, useEffect } from "react";
import "./Products.css";
import ProductSlideshow from "./ProductSlideshow";
import { Link } from "react-router-dom";


const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // ✅ Show 8 per page

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  const getCategories = (cat) => {
    if (Array.isArray(cat)) return cat;
    if (typeof cat === "string") {
      return cat.split(",").map((c) => c.trim());
    }
    return [];
  };

  const categories = [
    "All",
    ...new Set(products.flatMap((p) => getCategories(p.category))),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) =>
          getCategories(p.category).includes(selectedCategory)
        );

  // ✅ Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page) => {
  if (page >= 1 && page <= totalPages) {
    const grid = document.querySelector(".product-grid");
    if (grid) grid.classList.add("fade-to-white");

    setTimeout(() => {
      setCurrentPage(page);
      if (grid) {
        grid.classList.remove("fade-to-white");
        grid.classList.add("fade-in");
      }

      // Scroll to the product grid top (with header offset)
      setTimeout(() => {
        const grid = document.querySelector(".product-grid");
        if (grid) {
          const yOffset = -80; // adjust header height
          const y = grid.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 200);
    }, 300); // match fade timing
  }
};



  return (
    <div className="products-page">
      <h1 className="products-title">Our Products</h1>

      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => {
              setSelectedCategory(cat);
              setCurrentPage(1); // reset to page 1 when category changes
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => {
            const images = Object.keys(product)
              .filter((key) => key.startsWith("image1"))
              .map((key) => product[key])
              .filter(Boolean);

            return (
              <Link to={`/products/${product.id}`} className="details-link">
              <div key={product.id} className="product-card">
                {images.length > 0 && <ProductSlideshow images={images} />}
                <h3>{product.name}</h3>
                <p className="product-category">
                  {getCategories(product.category).join(", ")}
                </p>
                <p className="product-description">{product.description}</p>
                <span className="price">{product.price}</span>
                
                  
                
              </div>
              </Link>
            );
          })
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>

      {/* ✅ Pagination Controls */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="page-btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ‹ Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              className={`page-btn ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className="page-btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next ›
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
