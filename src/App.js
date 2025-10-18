import React from "react";
import Header from "./components/Header";
import Slideshow from "./components/Slideshow";
import Clients from "./components/Clients";
import TopProducts from "./components/TopProducts";
import Mission from "./components/Mission";

function App() {
  return (
    <>
      <Header logo="/logo.png" title="R.K. Aromatics" />
      <Slideshow />
      
      <TopProducts />
      <Mission />
      <Clients />

    </>
  );
}

export default App;