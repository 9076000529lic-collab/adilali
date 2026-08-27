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

        <section className="statement" id="story">
          <p className="eyebrow">OUR PHILOSOPHY</p>

          <h2>
            Designed to be lived in,
            <br />
            <em>not just looked at.</em>
          </h2>
        </section>

        <Features />
      </main>

      <Footer />

      <CartDrawer />
    </>
  );
}