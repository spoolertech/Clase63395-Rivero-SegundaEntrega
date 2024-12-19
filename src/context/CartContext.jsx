import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const getTotalUnits = () => {
    return cart.length;
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, getTotalUnits }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
