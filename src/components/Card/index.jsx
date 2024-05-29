import React from "react";
import "./style.css";

const Card = ({text, price, img}) => {
    const imgstyle = {
        backgroundImage: `url(${img})`
    }
    return (
        <div className="card">
            <div className="card__img" style={imgstyle}></div>
            <div className="card__price">{price}</div>
            <div className="card__text">{text}</div>
            <button className="btn">Вкорзну</button>
        </div>
    )
}

export default Card;