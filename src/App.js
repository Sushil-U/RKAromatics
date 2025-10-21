import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Slideshow from "./components/Slideshow";
import TopProducts from "./components/TopProducts";
import Mission from "./components/Mission";
import Clients from "./components/Clients";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import About from "./components/About";

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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
