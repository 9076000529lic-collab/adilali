import React from "react";

import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import CartDrawer from "../components/CartDrawer/CartDrawer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <ProductGrid />

        

        <Features />
      </main>

      <Footer />

      <CartDrawer />
    </>
  );
}