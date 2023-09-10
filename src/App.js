import React from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Section from "./Section/Section";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <header>
      <Navbar />
      <Section />
      <Sidebar />
      <Footer />
    </header>
  );
};

export default App;
