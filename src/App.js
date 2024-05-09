import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./index.css";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import  Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Catalog from "./pages/catalog";
import Services from "./pages/services";
import Auth from "./pages/auth";

export default function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about" element = {<About />} />
          <Route path="/contact" element = {<Contact />} />
          <Route path="/catalog" element = {<Catalog />} />
          <Route path="/services" element = {<Services />} />
          <Route path="/auth" element = {<Auth />} />
      </Routes>
      <Footer />
    </Router>
    
  );
}
