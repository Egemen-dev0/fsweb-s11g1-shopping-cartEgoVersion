import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import { ProductProvider } from './Contexts/ProductContext';
import { CartProvider } from './Contexts/CartContext';
// Bileşenler
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {


    return (
        <div className="App">
            <CartProvider>
                <ProductProvider>
                    <Navigation />
                    {/* Routelar */}
                    <main className="content">

                        <Route exact path="/">
                            <Products />
                        </Route>
                        <Route path="/cart">
                            <ShoppingCart />
                        </Route>

                    </main>
                </ProductProvider>
            </CartProvider>
        </div>
    );
}

export default App;
