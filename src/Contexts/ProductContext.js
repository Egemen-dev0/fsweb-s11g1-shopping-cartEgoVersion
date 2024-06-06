import { createContext, useState } from "react";
import { data } from "../data";

const ProductContext = createContext();
const ProductProvider = ({children}) => {
    const [products, setProducts] = useState(data);
    //addCartItem
    return (
        <ProductContext.Provider value={{ products,  }}>
            {children}
        </ProductContext.Provider>
    );
}
export  {ProductProvider, ProductContext}