import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Product from "./routes/Product";
import CartPage from "./routes/CartPage";

const App = () => {
  // Cart state
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCart((currentCart) => {
      // Check if product already exists
      const existingProduct = currentCart.find(
        (item) => item.id === product.id,
      );

      // Product already exists
      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }

      // Add new product
      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  return (
    <>
      <Navbar />

      <Routes>
        {/* Product Page */}
        <Route
          path="/"
          element={<Product addToCart={addToCart} cart={cart} />}
        />

        {/* Product Route */}
        <Route
          path="/products"
          element={<Product addToCart={addToCart} cart={cart} />}
        />

        {/* Cart Page */}
        <Route
          path="/cart"
          element={<CartPage cart={cart} setCart={setCart} />}
        />
      </Routes>
    </>
  );
};

export default App;
