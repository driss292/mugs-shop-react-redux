import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, FloatingCart } from "./Components";
import {
    Home,
    Contact,
    ShoppingCart,
    ProductShowcase,
    Products,
} from "./Pages";

const App = () => {
    return (
        <Router>
            <Navbar />
            <FloatingCart />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produits" element={<Products />} />
                <Route path="/produits/:id" element={<ProductShowcase />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/shoppingCart" element={<ShoppingCart />} />
            </Routes>
        </Router>
    );
};

export default App;
