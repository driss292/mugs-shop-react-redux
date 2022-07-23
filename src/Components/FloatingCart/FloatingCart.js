import React from "react";
import { Link } from "react-router-dom";
import "./FloatingCart.css";
import cartIcon from "./shopping-cart.svg";

const FloatingCart = () => {
    return (
        <Link to="shoppingCart">
            <div className="floating-cart">
                <p>Votre panier</p>
                <div className="img-notif-container">
                    <img src={cartIcon} alt="icone caddie" />
                    <span className="notif">0</span>
                </div>
            </div>
        </Link>
    );
};

export default FloatingCart;
