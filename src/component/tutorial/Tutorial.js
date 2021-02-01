import React from 'react'
import { Link } from 'react-router-dom'

export const Tutorial = () => {


    return (
        <>
            <img className="imgBg" src={ `./assets/tutorial/bgTop.png` } alt="bgTop" />
            <div className="container">
                <div className="d-flex flex-column align-items-center mt-3">
                    <h1 className="tutorial-titulo">¡Bienvenido a Cupot!</h1>
                    <p className="tutorial-parrafo">Encontrá los descuentos de tus restaurantes favoritos</p>
                    <img src="./assets/tutorial/logo.png" alt="logo"/>
                    <div className="d-flex justify-content-between w-75 tutorial-div-boton">
                        <Link className="btn-saltar" to="./home">Saltear</Link>
                        <Link className="btn-tutorial" to="/explicacion">Ver tutorial</Link>
                    </div>
                </div>
            </div>
            <img src={ `./assets/tutorial/bgBot.png` } alt="bgBot" />
        </>
    )
}
