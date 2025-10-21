import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2>Rozerscents</h2>
        <textbold>(Powered by R.K.Aromatics)</textbold>
        <p>
          Bringing you the finest fragrances and lifestyle products to make
          every moment luxurious.
        </p>
      </div>

      <div className="footer-center">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <div className="footer-right">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
