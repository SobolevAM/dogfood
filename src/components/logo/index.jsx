import React from "react";
import "./style.css";
import logo from "./img/logo.png";

export default () => {
    return (
        <a className="logo" href="">
            <img src={logo} alt="Dog Food"/>
            <span>DogFood</span>
        </a>
    )
};