import React from "react";
import products from "../../data/products";

const ProductGrid = () => {
  return (
    <section className="shop-section" id="shop">

      {/* Section Heading */}
      <div className="section-head">
        <div>
          <p className="eyebrow">THE COLLECTION</p>

          <h2>
            Shop our <em>favourites.</em>
          </h2>
        </div>

        <p className="section-note">
          Thoughtfully designed pieces made with comfort,
          quality fabrics and timeless Indian craftsmanship.
        </p>
      </div>

      {/* Products */}
      <div className="product-grid">

        {products.map((product) => (
          <article className="product-card" key={product.id}>

            {/* Product Image */}
            <div className="product-image-wrap">

              <img
                className="product-image"
                src={product.image}
                alt={product.name}
              />

              {/* Sale Badge */}
              {product.oldPrice > product.price && (
                <span className="product-badge">
                  SALE
                </span>
              )}

              {/* Wishlist */}
              <button
                type="button"
                className="wishlist"
                aria-label={`Add ${product.name} to wishlist`}
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.84 4.61C20.3292 4.09922 19.7227 3.69405 19.0551 3.41764C18.3875 3.14123 17.7319 2.99899 17.07 3C15.5 3 14.01 3.8 13 5.09C11.99 3.8 10.5 3 8.93 3C7.27 3 5.69 3.69 4.52 4.86C2.16 7.22 2.16 11.05 4.52 13.41L13 21.89L21.48 13.41C23.84 11.05 23.84 7.22 21.48 4.86L20.84 4.61Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Quick Add */}
              <button
                type="button"
                className="quick-add"
              >
                <span>Quick Add</span>
                <span>+</span>
              </button>

            </div>

            {/* Product Information */}
            <div className="product-info">

              <div>
                <p className="product-category">
                  Women's Collection
                </p>

                <h3>
                  {product.name}
                </h3>
              </div>

              {/* Price */}
              <div className="price">

                <strong>
                  ₹{product.price.toLocaleString("en-IN")}
                </strong>

                {product.oldPrice && (
                  <del>
                    ₹{product.oldPrice.toLocaleString("en-IN")}
                  </del>
                )}

                {product.oldPrice > product.price && (
                  <small>
                    {Math.round(
                      ((product.oldPrice - product.price) /
                        product.oldPrice) *
                        100
                    )}
                    % OFF
                  </small>
                )}

              </div>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
};

export default ProductGrid;