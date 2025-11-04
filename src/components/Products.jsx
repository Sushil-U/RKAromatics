import React, { useState, useEffect } from "react";
import "./Products.css";
import ProductSlideshow from "./ProductSlideshow";
import { Link, useLocation } from "react-router-dom"; // ✅ Added useLocation

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const location = useLocation(); // ✅ Access URL query params

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch product data");
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  // ✅ Parse URL ?category= query
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory("All");
    }
    setCurrentPage(1); // Reset to page 1 on category change via URL
  }, [location.search]);

  // ✅ Handle category arrays and comma-separated strings
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

  // helper: robust scroll to top of products section after re-render
// ✅ Universal scroll to Products section (works desktop + mobile)
const scrollToProductsTop = () => {
  // Wait for render to settle
  setTimeout(() => {
    const section = document.querySelector(".products-page");
    if (!section) return;

    // Detect if header is fixed/sticky
    const header =
      document.querySelector("header") ||
      document.querySelector(".site-header") ||
      document.querySelector(".main-header");

    let headerHeight = 0;
    if (header) {
      const style = window.getComputedStyle(header);
      const isFixed =
        style.position === "fixed" || style.position === "sticky";
      if (isFixed) {
        headerHeight = header.offsetHeight;
      }
    }

    // Calculate final Y position (top of section minus header height)
    const y =
      window.scrollY +
      section.getBoundingClientRect().top -
      (headerHeight + 20); // small gap for spacing

    // ✅ Use instant small-step scroll correction (desktop-safe)
    requestAnimationFrame(() => {
      window.scrollTo({
        top: Math.max(0, y),
        behavior: "smooth",
      });
    });
  }, 150); // wait a bit for layout to fully update (React render + CSS)
};



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

      // ✅ Scroll to top of section after new products render
      setTimeout(scrollToProductsTop, 300);
    }, 300);
  }
};


  return (
    <div className="products-page">
      <p className="gradient-title">Our Products</p>

      {/* ✅ Category Filter Buttons */}
      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => {
              setSelectedCategory(cat);
              setCurrentPage(1);
              // ✅ Update URL query to match selection
              const newUrl =
                cat === "All"
                  ? "/products"
                  : `/products?category=${encodeURIComponent(cat)}`;
              window.history.pushState({}, "", newUrl);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ✅ Product Grid */}
      <div className="product-grid">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => {
            const images = Object.keys(product)
              .filter((key) => key.startsWith("image1"))
              .map((key) => product[key])
              .filter(Boolean);

            return (
              <Link
                to={`/products/${product.id}`}
                className="details-link"
                key={product.id}
              >
                <div className="product-card">
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
