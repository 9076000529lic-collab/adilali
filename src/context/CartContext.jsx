import React, { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // ================================
  // ADD PRODUCT TO CART
  // ================================
  const addToCart = (product, size = null) => {
    const selectedSize =
      size || product.sizes?.[0] || "S";

    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) =>
          item.product.id === product.id &&
          item.size === selectedSize
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id &&
          item.size === selectedSize
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prevItems,
        {
          id: `${product.id}-${selectedSize}-${Date.now()}`,
          product,
          size: selectedSize,
          quantity: 1,
        },
      ];
    });
  };

  // ================================
  // REMOVE PRODUCT
  // ================================
  const removeFromCart = (cartId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== cartId)
    );
  };

  // ================================
  // INCREASE
  // ================================
  const increaseQuantity = (cartId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === cartId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // ================================
  // DECREASE
  // ================================
  const decreaseQuantity = (cartId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === cartId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // ================================
  // CHANGE SIZE
  // ================================
  const changeSize = (cartId, newSize) => {
    setCartItems((prevItems) => {
      const currentItem = prevItems.find(
        (item) => item.id === cartId
      );

      if (!currentItem) {
        return prevItems;
      }

      // Check if same product + same size already exists
      const duplicateItem = prevItems.find(
        (item) =>
          item.id !== cartId &&
          item.product.id === currentItem.product.id &&
          item.size === newSize
      );

      if (duplicateItem) {
        return prevItems
          .map((item) =>
            item.id === duplicateItem.id
              ? {
                  ...item,
                  quantity:
                    item.quantity + currentItem.quantity,
                }
              : item
          )
          .filter((item) => item.id !== cartId);
      }

      return prevItems.map((item) =>
        item.id === cartId
          ? {
              ...item,
              size: newSize,
            }
          : item
      );
    });
  };

  // ================================
  // CLEAR CART
  // ================================
  const clearCart = () => {
    setCartItems([]);
  };

  // ================================
  // CART COUNT
  // ================================
  const cartCount = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }, [cartItems]);

  // ================================
  // CART TOTAL
  // ================================
  const cartTotal = useMemo(() => {
    return cartItems.reduce(
      (total, item) =>
        total +
        Number(item.product.price || 0) *
          item.quantity,
      0
    );
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartTotal,

        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        changeSize,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}