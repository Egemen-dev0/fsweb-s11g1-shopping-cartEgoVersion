import React from "react";
import { ScCartCheckout } from "./scParts";
import { useContext } from "react";

// Components
import Item from "./ShoppingCartItem";
// Bunu niye değiştiriyosunuz ??
// nerden biliyon biz değiştirdik? valla biz de onu merak ediyoz
import {CartContext} from "../Contexts/CartContext";


const ShoppingCart = () => {

    const { cart } = useContext(CartContext);

    const getCartTotal = () => {
        return cart.reduce((acc, value) => {
            return acc + value.price;
        }, 0)
            .toFixed(2);
    };

    return (
        <div>
          {/*hocayla beraber tartıştık hoca geliyor zaten*/}
            {cart.map((item) => (
                <Item key={item.id} {...item} />
            ))}

            <ScCartCheckout>
                <p>Total: ${getCartTotal()}</p>
                <button>Checkout</button>
            </ScCartCheckout>
        </div>
    );
};

export default ShoppingCart;
