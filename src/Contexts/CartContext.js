import { createContext, useState, useEffect } from "react";
import { getSavedCart, setSaveCart } from "./../LocalStoraj/index";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getSavedCart());

  useEffect(() => {
    setSaveCart(cart);
  }, [cart]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const removeItem = (itemToBeRemovedID) => {
    setCart(cart.filter((item) => item.id !== itemToBeRemovedID));
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
