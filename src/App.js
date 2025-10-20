import React from "react";
import Header from "./components/Header";
import Slideshow from "./components/Slideshow";
import Clients from "./components/Clients";
import TopProducts from "./components/TopProducts";
import Mission from "./components/Mission";
import Footer from "./components/Footer";
import Categories from "./components/Categories";

function App() {
  return (
    <>
      <Header/>
      <Slideshow />
      <TopProducts />
      <Categories />
      <Mission />
      <Clients />
      <Footer />

    </>
  );
}

export default App;