import React from "react";
import "./Home.css";
import imageHomeShop from "./shopimg.jpg";

const Home = () => {
    return (
        <div className="global-container">
            <h1 className="home-title">
                Bienvenue au <span>Shop</span>
            </h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem, temporibus, assumenda ab inventore cumque
                doloremque corporis vero dolores aut totam id deleniti? Sint hic
                facilis eius repudiandae aliquid repellendus blanditiis?
            </p>
            <img src={imageHomeShop} alt="accueil shop" />
        </div>
    );
};

export default Home;
