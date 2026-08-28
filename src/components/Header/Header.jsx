import React, { useState } from "react";
import { useCart } from "../../context/CartContext";

const categories = [
  {
    name: "Salwar Suits",
    image: "/products/product-1.jpg",
  },
  {
    name: "Salwar Suits",
    image: "/products/product-2.jpg",
  },
  {
    name: "Salwar Suits",
    image: "/products/product-3.jpg",
  },
  {
    name: "Salwar Suits",
    image: "/products/product-4.jpg",
  },
  {
    name: "Salwar Suits",
    image: "/products/product-5.jpeg",
  },
  {
    name: "Salwar Suits",
    image: "/products/product-6.jpeg",
  },
  
];

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { cartCount, openCart } = useCart();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="main-header">

      {/* ================= TOP HEADER ================= */}

      <div className="header-main">

        {/* MOBILE MENU */}

        <button
          className={`mobile-menu-btn ${
            menuOpen ? "menu-active" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>


        {/* LOGO */}

        <div className="header-logo">
          <a href="/" onClick={closeMenu}>
            <span className="logo-main">
              ALFAZEX
            </span>

            <span className="logo-sub">
              TEXTILES
            </span>
          </a>
        </div>


        {/* DESKTOP NAV */}

        <nav className="main-nav">

          <a
            href="/"
            className="nav-item new-arrivals"
          >
            <span className="nav-badge new">
              New
            </span>

            New Arrivals
          </a>


          <a
            href="/sarees"
            className="nav-item"
          >
            Sarees

            <span className="nav-arrow">
              ⌄
            </span>
          </a>


          <a
            href="/salwar-suits"
            className="nav-item"
          >
            Salwar Suits

            <span className="nav-arrow">
              ⌄
            </span>
          </a>


          <a
            href="/dupattas"
            className="nav-item"
          >
            Dupattas
          </a>


          <a
            href="/others"
            className="nav-item"
          >
            Others

            <span className="nav-arrow">
              ⌄
            </span>
          </a>


          <a
            href="/sale"
            className="nav-item sale-item"
          >
            <span className="nav-badge sale">
              Sale
            </span>

            Sale
          </a>

        </nav>


        {/* RIGHT ACTIONS */}

        <div className="header-actions">

          {/* SEARCH */}

          <button
            className="header-icon"
            onClick={() =>
              setSearchOpen(!searchOpen)
            }
            aria-label="Search"
          >
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle
                cx="11"
                cy="11"
                r="7"
              />

              <path d="m20 20-4-4" />
            </svg>
          </button>


          {/* ACCOUNT */}

          <button
            className="header-icon account-icon"
            aria-label="Account"
          >
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <circle
                cx="12"
                cy="8"
                r="3.5"
              />

              <path d="M5 20c.8-4 3.1-6 7-6s6.2 2 7 6" />
            </svg>
          </button>


          {/* BAG */}

          <button
  type="button"
  className="header-icon bag-icon"
  onClick={() => {
    const drawer =
      document.querySelector(".drawer-shell");

    if (drawer) {
      drawer.classList.add("visible");
    }

    document.body.style.overflow = "hidden";
  }}
  aria-label="Shopping Bag"
>
  <svg
    viewBox="0 0 24 24"
    width="23"
    height="23"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M5 8h14l-1 13H6L5 8Z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </svg>

  {cartCount > 0 && (
    <span className="bag-count">
      {cartCount}
    </span>
  )}
</button>

        </div>
      </div>


      {/* ================= MOBILE NAV ================= */}

      <div
        className={`mobile-nav ${
          menuOpen
            ? "mobile-nav-open"
            : ""
        }`}
      >
        <div className="mobile-nav-inner">

          <div className="mobile-nav-label">
            MENU
          </div>


          <a
            href="/"
            onClick={closeMenu}
          >
            <span>New Arrivals</span>
            <span>↗</span>
          </a>


          <a
            href="/sarees"
            onClick={closeMenu}
          >
            <span>Sarees</span>
            <span>↗</span>
          </a>


          <a
            href="/salwar-suits"
            onClick={closeMenu}
          >
            <span>Salwar Suits</span>
            <span>↗</span>
          </a>


          <a
            href="/dupattas"
            onClick={closeMenu}
          >
            <span>Dupattas</span>
            <span>↗</span>
          </a>


          <a
            href="/others"
            onClick={closeMenu}
          >
            <span>Others</span>
            <span>↗</span>
          </a>


          <a
            href="/sale"
            className="mobile-sale"
            onClick={closeMenu}
          >
            <span>Sale</span>
            <span>↗</span>
          </a>


          <div className="mobile-menu-bottom">
            <span>
              ALFAZEX TEXTILES
            </span>

            <span>
              EST. 2026
            </span>
          </div>

        </div>
      </div>


      {/* MOBILE OVERLAY */}

      {menuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={closeMenu}
        />
      )}


      {/* ================= CATEGORY BAR ================= */}

      <div className="category-bar">

        <div className="category-scroll">

          {categories.map(
            (category, index) => (
              <a
                href={`/${category.name
                  .toLowerCase()
                  .replaceAll(" ", "-")}`}
                className="category-item"
                key={`${category.name}-${index}`}
              >

                <div className="category-image">

                  <img
                    src={category.image}
                    alt={category.name}
                  />

                </div>

                <span>
                  {category.name}
                </span>

              </a>
            )
          )}

        </div>

      </div>


      {/* ================= SEARCH PANEL ================= */}

      <div
        className={`search-panel ${
          searchOpen
            ? "search-active"
            : ""
        }`}
      >

        <div className="search-inner">

          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          >
            <circle
              cx="11"
              cy="11"
              r="7"
            />

            <path d="m20 20-4-4" />
          </svg>


          <input
            type="text"
            placeholder="Search for sarees, suits, dupattas..."
            autoFocus={searchOpen}
          />


          <button
            className="search-close"
            onClick={() =>
              setSearchOpen(false)
            }
            aria-label="Close Search"
          >
            ×
          </button>

        </div>

      </div>

    </header>
  );
}