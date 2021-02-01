import React from 'react'
import { Link } from 'react-router-dom'

export const Explicacion = () => {



    return (
        <>
            <nav className="navbar nav-explicacion">
                <div className="container">
                    <p className="navbar-brand">
                        <img src="./assets/explicacion/logo-nav.png" alt="logo coput"/>
                    </p>
                    <p className="nav-explicacion-tutorial me-1">Tutorial</p>
                </div>
            </nav>

        


            <div id="tutorial-img-expicacion" className="carousel slide d-flex align-items-center mb-0" data-ride="carousel" data-interval="false">
                
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <h4 className="carrusel-title">Filtrá lo que estas buscando</h4>
                        
                        <div className="d-flex justify-content-center align-items-center ml-5">    
                            <img src="./assets/explicacion/paso1.png" className="d-block img-explica" alt="paso 1"/>
                            <a href="#tutorial-img-expicacion" role="button" data-slide="next">
                                <img src="./assets/explicacion/next.png" alt="Flecha"/>
                            </a>
                        </div>
                        <div className="footer-explicacion d-flex justify-content-around pb-4">
                            <Link className="btn-saltar" to="./home">Saltear</Link>

                            <button className="btn btn-tutorial" href="#tutorial-img-expicacion" data-slide="next">Entendido</button>                    
                        </div>
                    </div>
                    <div className="carousel-item">
                        <h4 className="carrusel-title">Crea una cuenta o logeate</h4>
                        <div className="d-flex justify-content-center align-items-center">
                            <a href="#tutorial-img-expicacion" role="button" data-slide="prev">
                                <img src="./assets/explicacion/prev.png" alt="Flecha"/>
                            </a>
                            <img src="./assets/explicacion/paso2.png" className="d-block img-explica" alt="paso 1"/>
                            <a href="#tutorial-img-expicacion" role="button" data-slide="next">
                                <img src="./assets/explicacion/next.png" alt="Flecha"/>
                            </a>
                        </div>
                        <div className="footer-explicacion d-flex justify-content-around pb-4">
                            <Link className="btn-saltar" to="./home">Saltear</Link>

                            <button className="btn btn-tutorial" href="#tutorial-img-expicacion" data-slide="next">Entendido</button>                    
                        </div>
                    </div>
                    <div className="carousel-item">
                        <h4 className="carrusel-title">Elegí la promoción</h4>
                        <div className="d-flex justify-content-center align-items-center">
                            <a href="#tutorial-img-expicacion" role="button" data-slide="prev">
                                <img src="./assets/explicacion/prev.png" alt="Flecha"/>
                            </a>
                            <img src="./assets/explicacion/paso3.png" className="d-block img-explica" alt="paso 1"/>
                            <a href="#tutorial-img-expicacion" role="button" data-slide="next">
                                <img src="./assets/explicacion/next.png" alt="Flecha"/>
                            </a>
                        </div>
                        <div className="footer-explicacion d-flex justify-content-around pb-4">
                            <Link className="btn-saltar" to="./home">Saltear</Link>

                            <button className="btn btn-tutorial" href="#tutorial-img-expicacion"  data-slide="next">Entendido</button>                    
                        </div>
                    </div>
                    <div className="carousel-item">
                        <h4 className="carrusel-title">Escaneá el código en el restaurante</h4>
                        <div className="d-flex justify-content-center align-items-center mr-5">
                            <a href="#tutorial-img-expicacion" role="button" data-slide="prev">
                                <img src="./assets/explicacion/prev.png" alt="Flecha"/>
                            </a>
                            <img src="./assets/explicacion/paso4.png" className="d-block img-explica" alt="paso 4"/>
                        </div>
                        
                        <div className="footer-explicacion d-flex justify-content-center pb-4">
                            <Link className="btn btn-tutorial" to="/home">Entendido</Link>                    
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
