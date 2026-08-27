import { Search, ShoppingBag, UserRound, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const { count, setOpen } = useCart();

  return (
    <>
      <div className="announcement">
        <span>Complimentary shipping on orders over ₹2,000</span>
      </div>

      <header className="header">
        <button className="icon-btn mobile-only" onClick={() => setMenu(!menu)}>
          {menu ? <X size={21} /> : <Menu size={21} />}
        </button>

        <a className="brand" href="/">
          MAISON<span>.</span>
        </a>

        <nav className={`nav ${menu ? "nav-open" : ""}`}>
          <a href="#shop" onClick={() => setMenu(false)}>Shop</a>
          <a href="#featured" onClick={() => setMenu(false)}>Collection</a>
          <a href="#story" onClick={() => setMenu(false)}>Our Story</a>
          <a href="#footer" onClick={() => setMenu(false)}>Contact</a>
        </nav>

        <div className="header-actions">
          <button className="icon-btn" aria-label="Search"><Search size={19} /></button>
          <button className="icon-btn desktop-only" aria-label="Account"><UserRound size={19} /></button>
          <button className="bag-btn" onClick={() => setOpen(true)} aria-label="Cart">
            <ShoppingBag size={19} />
            {count > 0 && <span>{count}</span>}
          </button>
        </div>
      </header>
    </>
  );
}