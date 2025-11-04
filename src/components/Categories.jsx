import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Add this
import "./Categories.css";

const categories = [
  { name: "Rozer Oil", image: "/images/cat1.jpg" },
  { name: "Fragrance Diffuser", image: "/images/cat2.jpg" },
  { name: "Dispenser", image: "/images/cat6.jpg" },
  { name: "Hygiene", image: "/images/cat3.jpg" },
  { name: "Perfumes", image: "/images/cat4.jpg" },
  { name: "Others", image: "/images/cat5.jpg" },
];

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    // ✅ Navigate to Products page with selected category
    navigate(`/products?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <div className="categories-container">
      <h2>Browse By Category</h2>
      <div className="categories-wrapper">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="category-card"
            onClick={() => handleCategoryClick(cat.name)}
            style={{ cursor: "pointer" }} // ✅ Makes it clear it's clickable
          >
            <img src={cat.image} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
