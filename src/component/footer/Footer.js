import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className="footer__main">
            <Link to="/ubicacion">
                <img src="./assets/home/ubicacion.png" alt="ubicacion" />
            </Link>
            <Link to="/favoritos">
                <img src="./assets/home/favoritos.png" alt="favoritos" />
            </Link>
            <Link to="/home">
                <img src="./assets/home/home.png" alt="home" />
            </Link>
            <Link to="/buscador">
                <img src="./assets/home/buscador.png" alt="buscador" />
            </Link>
            <Link to="/auth/login">
                <img src="./assets/home/persona.png" alt="persona" />
            </Link>
        </footer>
    )
}
