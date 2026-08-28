import React from "react";
import { useCart } from "../../context/CartContext";

export default function CartDrawer() {
  const {
    cartItems = [],
    cartCount = 0,
    cartTotal = 0,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    changeSize,
  } = useCart();

  const closeDrawer = () => {
    const drawer = document.querySelector(".drawer-shell");

    if (drawer) {
      drawer.classList.remove("visible");
    }

    document.body.style.overflow = "";
  };

  // ==========================================
  // DESCRIPTION KO SAFE TARAH SE SHOW KAREGA
  // STRING + OBJECT DONO HANDLE HONGE
  // ==========================================
  const renderDescription = (description) => {
    if (!description) {
      return (
        <p className="description-empty">
          Product details are available on the product page.
        </p>
      );
    }

    // Agar description simple string hai
    if (typeof description === "string") {
      return (
        <p className="cart-description-text">
          {description}
        </p>
      );
    }

    // Agar description object hai
    if (
      typeof description === "object" &&
      !Array.isArray(description)
    ) {
      return (
        <div className="cart-description-list">
          {Object.entries(description).map(
            ([key, value]) => {
              // Null / undefined ko skip karo
              if (
                value === null ||
                value === undefined ||
                value === ""
              ) {
                return null;
              }

              // Agar value bhi object hai
              if (typeof value === "object") {
                return (
                  <div
                    className="description-row"
                    key={key}
                  >
                    <span className="description-label">
                      {formatLabel(key)}
                    </span>

                    <span className="description-value">
                      {JSON.stringify(value)}
                    </span>
                  </div>
                );
              }

              return (
                <div
                  className="description-row"
                  key={key}
                >
                  <span className="description-label">
                    {formatLabel(key)}
                  </span>

                  <span className="description-value">
                    {String(value)}
                  </span>
                </div>
              );
            }
          )}
        </div>
      );
    }

    // Agar array hai
    if (Array.isArray(description)) {
      return (
        <div className="cart-description-list">
          {description.map((item, index) => (
            <div
              className="description-row"
              key={index}
            >
              <span className="description-value">
                {typeof item === "object"
                  ? JSON.stringify(item)
                  : String(item)}
              </span>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  // ==========================================
  // camelCase -> BEAUTIFUL LABEL
  // ==========================================
  const formatLabel = (text) => {
    return text
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (char) => char.toUpperCase());
  };

  return (
    <div className="drawer-shell">

      {/* =========================================
          OVERLAY
      ========================================= */}
      <div
        className="drawer-overlay"
        onClick={closeDrawer}
      />

      {/* =========================================
          DRAWER
      ========================================= */}
      <aside className="cart-drawer">

        {/* =======================================
            HEADER
        ======================================= */}
        <div className="drawer-head">

          <div>
            <p className="drawer-kicker">
              YOUR SHOPPING BAG
            </p>

            <h2>
              Cart{" "}
              <span>
                ({cartCount})
              </span>
            </h2>
          </div>

          <button
            type="button"
            className="drawer-close"
            onClick={closeDrawer}
            aria-label="Close cart"
          >
            ×
          </button>

        </div>

        {/* =======================================
            CART ITEMS
        ======================================= */}
        <div className="cart-items">

          {cartItems.length === 0 ? (

            /* =====================================
               EMPTY CART
            ===================================== */
            <div className="empty-cart">

              <div className="empty-bag">
                ♡
              </div>

              <h3>
                Your bag is empty
              </h3>

              <p>
                Add something beautiful
                to your collection.
              </p>

              <button
                type="button"
                className="empty-shop-btn"
                onClick={closeDrawer}
              >
                CONTINUE SHOPPING →
              </button>

            </div>

          ) : (

            cartItems.map((item) => {

              // Safety check
              if (!item || !item.product) {
                return null;
              }

              const product = item.product;

              const sizes =
                Array.isArray(product.sizes) &&
                product.sizes.length > 0
                  ? product.sizes
                  : [
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL",
                    ];

              const quantity =
                Number(item.quantity) || 1;

              const itemPrice =
                Number(product.price) || 0;

              const totalItemPrice =
                itemPrice * quantity;

              return (
                <article
                  className="cart-item"
                  key={item.id}
                >

                  {/* =================================
                      IMAGE
                  ================================= */}
                  <div className="cart-item-image">

                    <img
                      src={product.image}
                      alt={product.name || "Product"}
                    />

                  </div>

                  {/* =================================
                      INFO
                  ================================= */}
                  <div className="cart-item-info">

                    {/* PRODUCT TOP */}
                    <div className="cart-item-top">

                      <div>

                        <p className="cart-category">
                          WOMEN'S COLLECTION
                        </p>

                        <h3>
                          {product.name ||
                            "Product"}
                        </h3>

                      </div>

                      <button
                        type="button"
                        className="cart-remove-top"
                        onClick={() =>
                          removeFromCart(item.id)
                        }
                        aria-label="Remove product"
                      >
                        ×
                      </button>

                    </div>

                    {/* =================================
                        PRICE
                    ================================= */}
                    <strong className="cart-price">

                      ₹
                      {totalItemPrice.toLocaleString(
                        "en-IN"
                      )}

                    </strong>

                    {/* =================================
                        DESCRIPTION
                    ================================= */}
                    <div className="cart-description">

                      <div className="description-heading">
                        PRODUCT DETAILS
                      </div>

                      {renderDescription(
                        product.description
                      )}

                    </div>

                    {/* =================================
                        SIZE
                    ================================= */}
                    <div className="cart-size-section">

                      <span className="cart-size-label">
                        SELECT SIZE
                      </span>

                      <div className="cart-sizes">

                        {sizes.map((size) => (

                          <button
                            type="button"
                            key={size}
                            className={
                              item.size === size
                                ? "cart-size active"
                                : "cart-size"
                            }
                            onClick={() =>
                              changeSize(
                                item.id,
                                size
                              )
                            }
                          >
                            {size}
                          </button>

                        ))}

                      </div>

                    </div>

                    {/* =================================
                        QUANTITY + REMOVE
                    ================================= */}
                    <div className="cart-item-bottom">

                      <div className="qty">

                        <button
                          type="button"
                          onClick={() =>
                            decreaseQuantity(
                              item.id
                            )
                          }
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>

                        <span>
                          {quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            increaseQuantity(
                              item.id
                            )
                          }
                          aria-label="Increase quantity"
                        >
                          +
                        </button>

                      </div>

                      <button
                        type="button"
                        className="remove-btn"
                        onClick={() =>
                          removeFromCart(item.id)
                        }
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                </article>
              );
            })

          )}

        </div>

        {/* =========================================
            BOTTOM CHECKOUT
        ========================================= */}
        {cartItems.length > 0 && (

          <div className="drawer-bottom">

            <div className="total-row">

              <span>
                Subtotal
              </span>

              <strong>
                ₹
                {Number(cartTotal).toLocaleString(
                  "en-IN"
                )}
              </strong>

            </div>

            <p>
              Taxes and shipping calculated
              at checkout.
            </p>

            <button
              type="button"
              className="checkout-btn"
            >
              <span>
                CHECKOUT
              </span>

              <span>
                →
              </span>
            </button>

          </div>

        )}

      </aside>

    </div>
  );
}