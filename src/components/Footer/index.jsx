import React from "react";
import Logo from "../logo"
import "./style.css"

export default () => {
    return (
        <>
            <footer>
                <Logo/>
                <span className="copy">
                    &copy;{new Date().getFullYear()}DogFood.ru
                </span>
                <a href="">Lorem.</a>
                <a href="">Ea.</a>
                <a href="">Libero.</a>
                <a href="">Pariatur?</a>
                <a href="">Obcaecati.</a>
                <a href="">Modi?</a>
                <a href="">Vero.</a>
                <a href="">Optio?</a>
                <div className="contacts">
                    <p>Мы на связи</p>
                    <a href="tel:+7(999)00-00-00">+7(999)00-00-00</a>
                    <nav>
                        <a><i class="fa-brands fa-vk"></i></a>
                        <a><i class="fa-brands fa-whatsapp"></i></a>
                        <a><i class="fa-brands fa-telegram"></i></a>
                        <a><i class="fa-brands fa-viber"></i></a>
                    </nav>
                </div>
            </footer>
        </>
    )
}