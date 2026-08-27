export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div>
          <p className="eyebrow">STAY IN THE LOOP</p>
          <h2>Good things,<br /><em>occasionally.</em></h2>
        </div>
        <div className="newsletter">
          <input type="email" placeholder="Your email address" />
          <button>Subscribe →</button>
        </div>
      </div>
      <div className="footer-bottom">
        <strong>MAISON.</strong>
        <span>© 2026 Maison. All rights reserved.</span>
        <div><a href="/">Privacy</a><a href="/">Shipping</a><a href="/">Returns</a></div>
      </div>
    </footer>
  );
}