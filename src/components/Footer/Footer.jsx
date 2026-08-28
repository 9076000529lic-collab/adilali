import React from "react";
import "../../Footer.css";
export default function Footer() {
  return (
    <footer className="site-footer" id="footer">

      {/* TOP FOOTER */}
      <div className="footer-container">

        {/* BRAND / CONTACT */}
        <div className="footer-column footer-brand-column">
          <div className="footer-logo">
            <span>ALFAZEX.</span>
          </div>

          <div className="footer-contact">
            <p>
              Address: Unit A/53, Fourth Floor,<br />
              Todi Industrial Estate,<br />
              Lower Parel, Mumbai - 400013
            </p>

            <p>
              Email: <strong>support@alfazex.com</strong>
            </p>

            <p>
              Phone: <strong>+91 8418903966</strong>
            </p>
          </div>

          <a href="/" className="direction-link">
            Get direction <span>↗</span>
          </a>

          {/* SOCIAL ICONS */}
          <div className="footer-socials">
            <a href="/" aria-label="Facebook">f</a>
            <a href="/" aria-label="X">𝕏</a>
            <a href="/" aria-label="Instagram">◎</a>
            <a href="/" aria-label="YouTube">▶</a>
            <a href="/" aria-label="Pinterest">p</a>
            <a href="/" aria-label="WhatsApp">◔</a>
          </div>
        </div>


        {/* COLLECTION */}
        <div className="footer-column">
          <h3>Collection</h3>

          <div className="footer-links">
            <a href="/">Dupatta</a>
            <a href="/">Fabric</a>
            <a href="/">Gharara</a>
            <a href="/">Jewellery</a>
            <a href="/">Kurta Pajama</a>
            <a href="/">Lahenga</a>
            <a href="/">Salwar Suit</a>
            <a href="/">Saree</a>
          </div>
        </div>


        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <div className="footer-links">
            <a href="/">About Us</a>
            <a href="/">Contact Us</a>
            <a href="/">Blog</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/">Shipping Policy</a>
            <a href="/">Refund Policy</a>
            <a href="/">Terms & Conditions</a>
            <a href="/">Track my order</a>
            <a href="/">Exchange Product</a>
          </div>
        </div>


        {/* NEWSLETTER */}
        <div className="footer-column newsletter-column">
          <h3>Sign Up for Email</h3>

          <p className="newsletter-text">
            Sign up to get first dibs on new arrivals,
            sales, exclusive content, events and more!
          </p>

          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter email address"
            />

            <button type="submit">
              Subscribe
              <span>↗</span>
            </button>
          </form>

          <div className="currency">
            <span className="india-flag">🇮🇳</span>
            <span>INR</span>
            <span className="currency-arrow">⌄</span>
          </div>
        </div>

      </div>


      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 WEBAURA. All rights reserved.</p>

        <div className="payment-methods">
          <span className="visa">VISA</span>
          <span className="paypal">P</span>
          <span className="mastercard">●</span>
          <span className="upi">UPI</span>
        </div>
      </div>


      {/* FLOATING REWARDS */}
      <button className="rewards-button">
        <span className="gift-icon">✦</span>
        <span>ALFAZEX Rewards</span>
      </button>

    </footer>
  );
}