import { Heart, Plus } from "lucide-react";
import { useCart } from "../../context/CartContext";

const money = (value) => `₹${value.toLocaleString("en-IN")}`;

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const discount = Math.round((1 - product.price / product.compareAt) * 100);

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <button className="wishlist" aria-label={`Add ${product.name} to wishlist`}>
          <Heart size={18} />
        </button>
        <img src={product.image} alt={product.name} className="product-image" />
        <button className="quick-add" onClick={() => addToCart(product)}>
          <span>Quick add</span><Plus size={17} />
        </button>
      </div>

      <div className="product-info">
        <div>
          <p className="product-category">{product.category}</p>
          <h3>{product.name}</h3>
        </div>
        <div className="price">
          <strong>{money(product.price)}</strong>
          <del>{money(product.compareAt)}</del>
          <small>{discount}% OFF</small>
        </div>
      </div>
    </article>
  );
}