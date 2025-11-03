import React , { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Slideshow from "./components/Slideshow";
import TopProducts from "./components/TopProducts";
import Mission from "./components/Mission";
import Clients from "./components/Clients";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";



function App() {


  return (
    <Router>
      <Header />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Slideshow />
              <TopProducts />
              <Categories />
              <Mission />
              <Clients />
              
            </>
          }
        />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Contact us page */}
        <Route path="/contact" element={<Contact />} />

        {/* Products page */}
        <Route path="/products" element={<Products />} />

      </Routes> 
      <Footer />
    </Router>
  );
}

export default App;
