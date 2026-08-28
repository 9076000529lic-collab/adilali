import React from "react";
import products from "../../data/products";
import { useCart } from "../../context/CartContext";

const ProductGrid = () => {
  const { addToCart } = useCart();

  const handleQuickAdd = (product) => {
    const defaultSize =
      product.sizes?.[0] || "S";

    addToCart(product, defaultSize);
  };

  return (
    <section
      className="shop-section"
      id="shop"
    >
      {/* =========================
          SECTION HEADER
      ========================= */}

      <div className="section-head">
        <div>
          <p className="eyebrow">
            THE COLLECTION
          </p>

          <h2>
            Shop our <em>favourites.</em>
          </h2>
        </div>

        <p className="section-note">
          Thoughtfully designed pieces made with
          comfort, quality fabrics and timeless
          Indian craftsmanship.
        </p>
      </div>

      {/* =========================
          PRODUCT GRID
      ========================= */}

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
            >

              {/* IMAGE */}

              <div className="product-image-wrap">

                <img
                  className="product-image"
                  src={product.image}
                  alt={product.name}
                />

                {/* SALE */}

                {discount > 0 && (
                  <span className="product-badge">
                    SALE
                  </span>
                )}

                {/* WISHLIST */}

                <button
                  type="button"
                  className="wishlist"
                  aria-label="Add to wishlist"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20.84 4.61C20.33 4.1 19.72 3.69 19.06 3.42C18.39 3.14 17.73 3 17.07 3C15.5 3 14.01 3.8 13 5.09C11.99 3.8 10.5 3 8.93 3C7.27 3 5.69 3.69 4.52 4.86C2.16 7.22 2.16 11.05 4.52 13.41L13 21.89L21.48 13.41C23.84 11.05 23.84 7.22 21.48 4.86L20.84 4.61Z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* QUICK ADD */}

                <button
                  type="button"
                  className="quick-add"
                  onClick={() =>
                    handleQuickAdd(product)
                  }
                >
                  <span>
                    Quick Add
                  </span>

                  <span>
                    +
                  </span>
                </button>

              </div>

              {/* PRODUCT INFO */}

              <div className="product-info">

                <div className="product-details">

                  <p className="product-category">
                    Women's Collection
                  </p>

                  <h3>
                    {product.name}
                  </h3>

                  {/* AVAILABLE SIZES */}

                  <div className="product-available-sizes">
                    {product.sizes?.map(
                      (size) => (
                        <span key={size}>
                          {size}
                        </span>
                      )
                    )}
                  </div>

                </div>

                {/* PRICE */}

                <div className="price">

                  <strong>
                    ₹
                    {Number(
                      product.price
                    ).toLocaleString(
                      "en-IN"
                    )}
                  </strong>

                  {product.oldPrice && (
                    <del>
                      ₹
                      {Number(
                        product.oldPrice
                      ).toLocaleString(
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