import React from "react";
import { Link } from "react-router-dom";
import "./FloatingCart.css";
import cartIcon from "./shopping-cart.svg";
import { useSelector } from "react-redux";

const FloatingCart = () => {
    const shoppingCart = useSelector((state) => state);
    // console.log(shoppingCart);

    let totalItems = 0;
    for (const item of shoppingCart.cart) {
        totalItems += item.quantity;
    }
    return (
        <Link to="/shoppingCart">
            <div className="floating-cart">
                <p>Votre panier</p>
                <div className="img-notif-container">
                    <img src={cartIcon} alt="icone caddie" />
                    {/* <span className="notif">{totalItems}</span> */}
                    <span
                        className={totalItems === 0 ? "notif" : "notif fully"}
                    >
                        {totalItems}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default FloatingCart;
