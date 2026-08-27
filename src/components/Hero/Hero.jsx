import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">THE NEW EDIT · 2026</p>
        <h1>Less noise.<br /><em>More character.</em></h1>
        <p className="hero-text">
          Five considered essentials, designed with a quiet confidence
          and made for everyday living.
        </p>
        <a href="#shop" className="primary-btn">
          Explore collection <ArrowUpRight size={17} />
        </a>
      </div>

      <div className="hero-visual">
        <div className="hero-image" />
        <div className="hero-label">
          <span>01 / 05</span>
          <span>NEW SEASON</span>
        </div>
      </div>
    </section>
  );
}