import React from "react";
import products from "../../data/products";

const ProductGrid = () => {
  return (
    <section className="w-full bg-[#f8f6f1] px-4 py-12 sm:px-6 lg:px-10">

      {/* Section Heading */}
      <div className="mx-auto mb-10 max-w-7xl text-center">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.35em] text-[#a18a5b]">
          Our Collection
        </p>

        <h2 className="font-serif text-3xl font-semibold text-[#172218] sm:text-4xl">
          Elegant Ethnic Wear
        </h2>

        <div className="mx-auto mt-4 h-px w-16 bg-[#b69a63]" />

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-600">
          Discover beautifully crafted cotton outfits designed for comfort,
          elegance and everyday style.
        </p>
      </div>

      {/* Product Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {products.map((product) => (
          <div
            key={product.id}
            className="
              group
              overflow-hidden
              rounded-2xl
              border
              border-[#e7e1d6]
              bg-white
              shadow-sm
              transition-all
              duration-500
              hover:-translate-y-1
              hover:shadow-xl
            "
          >

            {/* Product Image */}
            <div className="relative aspect-[3/4] overflow-hidden bg-[#eeeae2]">

              <img
                src={product.image}
                alt={product.name}
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-105
                "
              />

              {/* Discount Badge */}
              {product.oldPrice > product.price && (
                <div
                  className="
                    absolute
                    left-4
                    top-4
                    rounded-full
                    bg-[#172218]
                    px-3
                    py-1.5
                    text-xs
                    font-semibold
                    tracking-wide
                    text-white
                  "
                >
                  SALE
                </div>
              )}

              {/* Wishlist */}
              <button
                type="button"
                aria-label="Add to wishlist"
                className="
                  absolute
                  right-4
                  top-4
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white/90
                  text-lg
                  text-[#172218]
                  shadow-md
                  backdrop-blur
                  transition-all
                  duration-300
                  hover:bg-[#172218]
                  hover:text-white
                "
              >
                ♡
              </button>

              {/* Quick Add Overlay */}
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  translate-y-full
                  bg-gradient-to-t
                  from-black/60
                  to-transparent
                  px-4
                  pb-4
                  pt-12
                  transition-transform
                  duration-500
                  group-hover:translate-y-0
                "
              >
                <button
                  type="button"
                  className="
                    w-full
                    rounded-xl
                    bg-white
                    py-3
                    text-sm
                    font-semibold
                    tracking-wide
                    text-[#172218]
                    shadow-lg
                    transition-all
                    duration-300
                    hover:bg-[#b69a63]
                    hover:text-white
                  "
                >
                  Quick Add
                </button>
              </div>
            </div>

            {/* Product Information */}
            <div className="p-5">

              {/* Product Name */}
              <h3
                className="
                  min-h-[48px]
                  text-[15px]
                  font-medium
                  leading-6
                  text-[#222]
                  transition-colors
                  duration-300
                  group-hover:text-[#8c7040]
                "
              >
                {product.name}
              </h3>

              {/* Rating */}
              <div className="mt-2 flex items-center gap-1">
                <span className="text-sm tracking-wide text-[#b69a63]">
                  ★★★★★
                </span>

                <span className="ml-1 text-xs text-gray-500">
                  4.8
                </span>
              </div>

              {/* Price */}
              <div className="mt-3 flex items-center gap-3">
                <span className="text-xl font-semibold text-[#172218]">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>

                <del className="text-sm text-gray-400">
                  ₹{product.oldPrice.toLocaleString("en-IN")}
                </del>

                <span className="text-xs font-semibold text-green-700">
                  {Math.round(
                    ((product.oldPrice - product.price) /
                      product.oldPrice) *
                      100
                  )}
                  % OFF
                </span>
              </div>

              {/* Sizes */}
              <div className="mt-4">
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
                  Available Sizes
                </p>

                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      type="button"
                      key={size}
                      className="
                        flex
                        h-8
                        min-w-8
                        items-center
                        justify-center
                        rounded-md
                        border
                        border-gray-200
                        bg-white
                        px-2
                        text-xs
                        font-medium
                        text-gray-700
                        transition-all
                        duration-200
                        hover:border-[#172218]
                        hover:bg-[#172218]
                        hover:text-white
                      "
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add To Cart */}
              <button
                type="button"
                className="
                  mt-5
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#172218]
                  px-5
                  py-3.5
                  text-sm
                  font-semibold
                  tracking-wide
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#b69a63]
                  hover:shadow-lg
                  active:scale-[0.98]
                "
              >
                <span className="text-base">🛒</span>
                Add to Cart
              </button>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default ProductGrid;