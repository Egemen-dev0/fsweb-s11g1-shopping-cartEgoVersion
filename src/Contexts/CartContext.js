import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = item => {
        setCart([...cart, item]);
    };

    const removeItem = itemToBeRemovedID => {
        setCart(cart.filter(item => item.id !== itemToBeRemovedID));
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };