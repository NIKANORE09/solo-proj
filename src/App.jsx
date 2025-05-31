import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Category from "./pages/Category.jsx";
import Slug from "./pages/Slug.jsx";
import Checkout from "./pages/Checkout.jsx";
import { CartContext } from "./providers/cart.providers.js";
import data from "../data.json";
import "./components/Header.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import AboutSection from "./components/AboutSection.jsx";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart, data }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/:category" element={<Category />} />
        <Route path="/:category/:slug" element={<Slug />} />
      </Routes>
      <AboutSection />
      <Footer />
    </CartContext.Provider>
  );
}

export default App;
