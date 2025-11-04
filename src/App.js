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
import Message from "./components/Message";
import ProductDetails from "./components/ProductDetails"; 


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
              <Products />
              <Clients />
              
            </>
          }
        />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/products" element={<Products />} />

        <Route path="/message" element={<Message />} />

        <Route path="/products/:id" element={<ProductDetails />} />

      </Routes> 
      <Footer />
    </Router>
  );
}

export default App;
