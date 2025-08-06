import React, { useState } from "react";
import Product from "./Product";
import CartSummary from "./CartSummary";

function ShoppingApp() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const isExist = cart.find((item) => item.nama === product.nama);
    if (!isExist) {
      setCart((prev) => [...prev, product]);
    }
  };

  const handleRemoveFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="mx-10 mt-10">
      <Product AddToCart={handleAddToCart} />
      <CartSummary cart={cart} onRemove={handleRemoveFromCart} />
    </div>
  );
}

export default ShoppingApp;
