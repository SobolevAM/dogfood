import React from "react";
import "./style.css";
import Logo from "../logo"

export default () => {
    return (
        <header>
            <Logo/>
            <input type="search"/>
            <nav>
                <a href="">Favorits</a>
                <a href="">Cart</a>
                <a href="">Profile</a>
            </nav>
        </header>
    )
};