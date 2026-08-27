import ProductCard from "../ProductCard/ProductCard";
import { products } from "../../data/products";

export default function ProductGrid() {
  return (
    <section className="shop-section" id="shop">
      <div className="section-head">
        <div>
          <p className="eyebrow">THE COLLECTION</p>
          <h2>Five pieces.<br /><em>Nothing extra.</em></h2>
        </div>
        <p className="section-note">A tightly edited collection built around quality, utility and timeless design.</p>
      </div>

      <div className="product-grid">
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  );
}