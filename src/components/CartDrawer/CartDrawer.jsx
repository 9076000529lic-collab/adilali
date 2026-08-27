import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../../context/CartContext";

const money = (value) => `₹${value.toLocaleString("en-IN")}`;

export default function CartDrawer() {
  const { items, total, open, setOpen, removeFromCart, updateQty } = useCart();

  return (
    <div className={`drawer-shell ${open ? "visible" : ""}`}>
      <div className="drawer-overlay" onClick={() => setOpen(false)} />
      <aside className="cart-drawer">
        <div className="drawer-head">
          <div><p className="eyebrow">YOUR BAG</p><h2>{items.length} items</h2></div>
          <button className="icon-btn" onClick={() => setOpen(false)}><X /></button>
        </div>

        <div className="cart-items">
          {items.length === 0 ? (
            <div className="empty-cart">
              <ShoppingBagIcon />
              <h3>Your bag is empty</h3>
              <p>Add something you love.</p>
            </div>
          ) : items.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt="" />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <strong>{money(item.price)}</strong>
                <div className="qty">
                  <button onClick={() => updateQty(item.id, item.qty - 1)}><Minus size={14}/></button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, item.qty + 1)}><Plus size={14}/></button>
                  <button className="remove" onClick={() => removeFromCart(item.id)}><Trash2 size={15}/></button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <div className="drawer-bottom">
            <div className="total-row"><span>Subtotal</span><strong>{money(total)}</strong></div>
            <p>Shipping and taxes calculated at checkout.</p>
            <button className="checkout-btn">Proceed to checkout <span>→</span></button>
          </div>
        )}
      </aside>
    </div>
  );
}

function ShoppingBagIcon() {
  return <div className="empty-bag">+</div>;
}