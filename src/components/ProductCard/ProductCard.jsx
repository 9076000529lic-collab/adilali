import React from "react";
import { useNavigate } from "react-router-dom";

import products from "../../data/products";

const ProductGrid = () => {
  const navigate = useNavigate();

  return (
    <section
      className="shop-section"
      id="shop"
    >

      {/* HEADING */}

      <div className="section-head">

        <div>

          <p className="eyebrow">
            THE COLLECTION
          </p>

          <h2>
            Shop our{" "}
            <em>favourites.</em>
          </h2>

        </div>

        <p className="section-note">
          Thoughtfully designed pieces made with
          comfort, quality fabrics and timeless
          Indian craftsmanship.
        </p>

      </div>

      {/* PRODUCTS */}

      <div className="product-grid">

        {products.map((product) => {

          const discount =
            product.oldPrice > product.price
              ? Math.round(
                  ((product.oldPrice -
                    product.price) /
                    product.oldPrice) *
                    100
                )
              : 0;

          return (
            <article
              className="product-card"
              key={product.id}
              onClick={() =>
                navigate(
                  `/product/${product.id}`
                )
              }
            >

              <div className="product-image-wrap">

                {discount > 0 && (
                  <span className="product-badge">
                    -{discount}%
                  </span>
                )}

                <button
                  type="button"
                  className="wishlist"
                  aria-label="Wishlist"
                  onClick={(e) =>
                    e.stopPropagation()
                  }
                >
                  ♡
                </button>

                <img
                  className="product-image"
                  src={product.image}
                  alt={product.name}
                />

                <button
                  type="button"
                  className="quick-add"
                  onClick={(e) => {
                    e.stopPropagation();

                    const drawer =
                      document.querySelector(
                        ".drawer-shell"
                      );

                    if (drawer) {
                      drawer.classList.add(
                        "visible"
                      );

                      document.body.style.overflow =
                        "hidden";
                    }
                  }}
                >
                  <span>
                    Quick Add
                  </span>

                  <span>+</span>
                </button>

              </div>

              <div className="product-info">

                <div>

                  <p className="product-category">
                    Women's Collection
                  </p>

                  <h3>
                    {product.name}
                  </h3>

                </div>

                <div className="price">

                  <strong>
                    ₹
                    {product.price.toLocaleString(
                      "en-IN"
                    )}
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
                    <small>
                      {discount}% OFF
                    </small>
                  )}

                </div>

              </div>

            </article>
          );
        })}

      </div>

    </section>
  );
};

export default ProductGrid;