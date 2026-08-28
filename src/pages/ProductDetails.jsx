import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Heart } from "lucide-react";

import products from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const product = products.find(
    (item) => String(item.id) === String(id)
  );

  const [selectedSize, setSelectedSize] = useState(
    product?.sizes?.[0] || "M"
  );

  if (!product) {
    return (
      <main className="product-not-found">
        <h1>Product not found</h1>

        <button onClick={() => navigate("/")}>
          Back to Home
        </button>
      </main>
    );
  }

  const sizes = product.sizes || [
    "S",
    "M",
    "L",
    "XL",
    "XXL",
  ];

  const discount =
    product.oldPrice > product.price
      ? Math.round(
          ((product.oldPrice - product.price) /
            product.oldPrice) *
            100
        )
      : 0;

  const handleAddToCart = () => {
    addToCart(product, selectedSize);

    const drawer = document.querySelector(
      ".drawer-shell"
    );

    if (drawer) {
      drawer.classList.add("visible");
      document.body.style.overflow = "hidden";
    }
  };

  const description = product.description;

  return (
    <main className="product-page">

      {/* BACK */}

      <div className="product-page-top">
        <button
          className="back-product"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={17} />
          Back
        </button>
      </div>

      {/* PRODUCT AREA */}

      <section className="product-main">

        {/* IMAGE */}

        <div className="product-detail-image">

          {discount > 0 && (
            <span className="detail-sale">
              -{discount}%
            </span>
          )}

          <button
            className="detail-wishlist"
            type="button"
          >
            <Heart size={19} />
          </button>

          <img
            src={product.image}
            alt={product.name}
          />

        </div>

        {/* INFO */}

        <div className="product-detail-info">

          <p className="detail-category">
            WOMEN'S COLLECTION
          </p>

          <h1>{product.name}</h1>

          <div className="detail-rating">
            <span>★★★★★</span>
            <small>4.9 · 24 Reviews</small>
          </div>

          <div className="detail-price">

            <strong>
              ₹{product.price.toLocaleString("en-IN")}
            </strong>

            {product.oldPrice && (
              <del>
                ₹
                {product.oldPrice.toLocaleString(
                  "en-IN"
                )}
              </del>
            )}

            {discount > 0 && (
              <span>{discount}% OFF</span>
            )}

          </div>

          <p className="detail-short">
            Thoughtfully crafted with premium fabric,
            comfortable fitting and timeless Indian
            craftsmanship. Perfect for everyday,
            festive and special occasions.
          </p>

          {/* SIZE */}

          <div className="detail-size">

            <div className="size-heading">
              <span>SELECT SIZE</span>

              <button type="button">
                Size Guide
              </button>
            </div>

            <div className="size-buttons">

              {sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={
                    selectedSize === size
                      ? "size-button active"
                      : "size-button"
                  }
                  onClick={() =>
                    setSelectedSize(size)
                  }
                >
                  {size}
                </button>
              ))}

            </div>

          </div>

          {/* ADD */}

          <button
            className="detail-add-button"
            type="button"
            onClick={handleAddToCart}
          >
            <span>
              ADD TO BAG
            </span>

            <ArrowUpRight size={18} />
          </button>

          <div className="detail-benefits">

            <div>
              <strong>01</strong>
              <span>Premium Quality</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Easy Returns</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Secure Checkout</span>
            </div>

          </div>

        </div>

      </section>

      {/* =================================================
          DESCRIPTION
      ================================================= */}

      <section className="product-description">

        <div className="description-header">

          <div>
            <p className="description-eyebrow">
              PRODUCT DETAILS
            </p>

            <h2>
              Details you’ll{" "}
              <em>love.</em>
            </h2>
          </div>

          <div className="description-header-line"></div>

        </div>

        <div className="description-grid">

          <div className="description-card">
            <span>PRODUCT TYPE</span>
            <strong>
              {description.productType}
            </strong>
          </div>

          <div className="description-card">
            <span>FABRIC</span>
            <strong>
              {description.fabric}
            </strong>
          </div>

          <div className="description-card">
            <span>WEIGHT</span>
            <strong>
              {description.weight}
            </strong>
          </div>

          <div className="description-card">
            <span>HEIGHT</span>
            <strong>
              {description.height}
            </strong>
          </div>

          <div className="description-card">
            <span>PATTERN</span>
            <strong>
              {description.pattern}
            </strong>
          </div>

          <div className="description-card">
            <span>KURTA STYLE</span>
            <strong>
              {description.kurtaStyle}
            </strong>
          </div>

          <div className="description-card">
            <span>NECK</span>
            <strong>
              {description.neck}
            </strong>
          </div>

          <div className="description-card">
            <span>SLEEVES</span>
            <strong>
              {description.sleeves}
            </strong>
          </div>

          <div className="description-card">
            <span>BOTTOM</span>
            <strong>
              {description.bottom}
            </strong>
          </div>

          <div className="description-card">
            <span>DUPATTA</span>
            <strong>
              {description.dupatta}
            </strong>
          </div>

          <div className="description-card description-wide">
            <span>SET INCLUDES</span>
            <strong>
              {description.setIncludes}
            </strong>
          </div>

          <div className="description-card description-wide">
            <span>WORK</span>
            <strong>
              {description.work}
            </strong>
          </div>

          <div className="description-card description-wide">
            <span>OCCASION</span>
            <strong>
              {description.occasion}
            </strong>
          </div>

          <div className="description-card">
            <span>FIT</span>
            <strong>
              {description.fit}
            </strong>
          </div>

          <div className="description-card">
            <span>SIZES</span>
            <strong>
              {description.sizes}
            </strong>
          </div>

          <div className="description-card description-wide">
            <span>FABRIC FEEL</span>
            <strong>
              {description.fabricFeel}
            </strong>
          </div>

          <div className="description-card description-wide">
            <span>SEASON</span>
            <strong>
              {description.season}
            </strong>
          </div>

        </div>

      </section>

    </main>
  );
}