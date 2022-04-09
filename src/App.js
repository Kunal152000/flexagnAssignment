import React from "react";
import AboutUs from "./components/aboutUs/aboutUs";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <AboutUs />
    </>
  );
};

export default App;
