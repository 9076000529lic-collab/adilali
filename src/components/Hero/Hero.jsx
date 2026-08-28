import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/products/Home-4.png",
    eyebrow: "SIGNATURE EDIT",
    title: "GRACE",
    subtitle: "BRAND OWNER",
  },
  {
    id: 1,
    image: "/products/Home-1.png",
    eyebrow: "NEW LAUNCH",
    title: "RUPA BUTI",
    subtitle: "PURE VISCOSE GEORGETTE SILK",
  },
  {
    id: 2,
    image: "/products/Home-2.png",
    eyebrow: "THE NEW EDIT",
    title: "TIMELESS",
    subtitle: "CRAFTED FOR EVERY OCCASION",
  },
  {
    id: 3,
    image: "/products/Home-3.png",
    eyebrow: "FESTIVE COLLECTION",
    title: "ELEGANCE",
    subtitle: "TRADITION WITH A MODERN TOUCH",
  },
  {
    id: 4,
    image: "/products/Home-1.png",
    eyebrow: "SIGNATURE EDIT",
    title: "GRACE",
    subtitle: "EFFORTLESSLY BEAUTIFUL",
  },
  {
    id: 5,
    image: "/products/Home-1.png",
    eyebrow: "NEW LAUNCH",
    title: "RUPA BUTI",
    subtitle: "PURE VISCOSE GEORGETTE SILK",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const slide = slides[current];

  return (
    <section
      className="hero-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* IMAGE */}
      <div className="hero-slider-image">
        {slides.map((item, index) => (
          <img
            key={item.id}
            src={item.image}
            alt={item.title}
            className={`hero-slide-img ${
              index === current ? "active" : ""
            }`}
          />
        ))}

        <div className="hero-overlay" />
      </div>

      {/* CONTENT */}
      <div className="hero-slider-content">
        <div className="hero-content-inner" key={slide.id}>
          <p className="hero-eyebrow">
            <span />
            {slide.eyebrow}
            <span />
          </p>

          <h1>{slide.title}</h1>

          <p className="hero-subtitle">{slide.subtitle}</p>

          <a href="#shop" className="hero-buy-btn">
            <span>SHOP NOW</span>

            <span className="hero-buy-icon">
              <ArrowUpRight size={16} />
            </span>
          </a>
        </div>
      </div>

      {/* LEFT ARROW */}
      <button
        className="hero-arrow hero-arrow-left"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ArrowLeft size={20} strokeWidth={1.5} />
      </button>

      {/* RIGHT ARROW */}
      <button
        className="hero-arrow hero-arrow-right"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ArrowRight size={20} strokeWidth={1.5} />
      </button>

      {/* BOTTOM INFO */}
      <div className="hero-bottom">
        <div className="hero-counter">
          <strong>
            {String(current + 1).padStart(2, "0")}
          </strong>

          <span>/</span>

          <span>
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>

        <div className="hero-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${
                index === current ? "active" : ""
              }`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="hero-season">
          <span>ALFAZEX</span>
          <span>2026 COLLECTION</span>
        </div>
      </div>
    </section>
  );
}