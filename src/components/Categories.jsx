import React from "react";
import "./Categories.css";

const categories = [
  { name: "Fragrance Oil", image: "/images/cat1.jpg" },
  { name: "Diffuser & Dispenser", image: "/images/cat2.jpg" },
  { name: "Hygiene Items", image: "/images/cat3.jpg" },
  { name: "Perfumes", image: "/images/cat4.jpg" },
  { name: "Acessories and tissue", image: "/images/cat5.jpg" },
];

const Categories = () => {
  return (
    <div className="categories-container">
      <h2>Browse By Category</h2>
      <div className="categories-wrapper">
        {categories.map((cat, index) => (
          <div key={index} className="category-card">
            <img src={cat.image} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
