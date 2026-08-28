import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { CartProvider } from "./context/CartContext";
import ProductDetails from "./pages/ProductDetails";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
         {/* PRODUCT DETAILS */}
      <Route
        path="/product/:id"
        element={<ProductDetails />}
      />
       <Route
        path="/privacy-policy"
        element={<PrivacyPolicy />}
      />
      </Routes>
    </CartProvider>
  );
}

export default App;