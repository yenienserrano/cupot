import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="nav-cupot d-flex justify-content-between">
            <Link to="/home">
                <img src="../../assets/home/logo-nav.png" alt="logo"/>
            </Link>

            <div className="d-flex justify-content-end">
                <button
                    className="home__btn"
                >
                    Escanear código    
                    <img className="ml-2" src="/assets/home/qrcodigo.png" alt="qr codigo"/>
                </button>
            </div>
        </nav>
    )
}
