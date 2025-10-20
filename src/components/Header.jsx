import React from "react";
import { useState, useRef, useEffect } from "react";
import "./Header.css";

const ProductsIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
    <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AboutIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
    <circle cx="12" cy="8" r="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 11v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ContactIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
    <path d="M21 8V7a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 11h8M8 15h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SearchIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LoginIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 17l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Header = ({ logo = "/logo.png", title = "Rozerscents" }) => {
  const [productsOpen, setProductsOpen] = useState(false);
  const productsRef = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (productsRef.current && !productsRef.current.contains(e.target)) {
        setProductsOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") setProductsOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className="app-header" role="banner">
    <a href="/" className="skip-link"> 
      <div className="header-left">
        <img src={logo} alt={`${title} logo`} className="header-logo" />
      </div>
      </a>

      <div className="header-center">
        {/* <h1 className="header-title">{title}</h1> */}
      </div>

      <div className="header-right">
        {/* Products dropdown */}
        <div ref={productsRef} style={{ position: "relative" }}>
          <button
            className="btn btn-ghost"
            aria-haspopup="menu"
            aria-expanded={productsOpen}
            onClick={() => setProductsOpen((v) => !v)}
          >
            <ProductsIcon className="icon" />
            <span className="btn-text">Products</span>
          </button>

          {productsOpen && (
            <ul
              role="menu"
              className="dropdown-menu"
            >
              <li role="none">
                <a role="menuitem" href="/products/essential-oils">Fragrance Oil</a>
              </li>
              <li role="none">
                <a role="menuitem" href="/products/perfumes">Diffuser and Dispenser</a>
              </li>
              <li role="none">
                <a role="menuitem" href="/products/accessories">Accessories</a>
              </li>
            </ul>
          )}
        </div>

        <a href="/about" className="skip-link" role="button" aria-label="About">
          <button className="btn btn-ghost" aria-label="About">
          <AboutIcon className="icon" />
          <span className="btn-text">About</span>
          </button>
        </a>

        <a href="/contact" className="skip-link" role="button" aria-label="About">
        <button className="btn btn-ghost" aria-label="Contact">
          <ContactIcon className="icon" />
          <span className="btn-text">Contact</span>
        </button>
        </a>

        <button className="btn btn-ghost" aria-label="Search">
          <SearchIcon className="icon" />
          <span className="btn-text">Search</span>
        </button>

        <button className="btn btn-primary" aria-label="Sign in">
          <LoginIcon className="icon" />
          <span className="btn-text">Sign In</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
