import React from 'react'
import { Link } from 'react-router-dom'

export const Promocion = ({promo, resta}) => {


    return (
    <>
        <div className="promocion__volver">
            <Link to="/home" className="promocion__btnvolver">
                <img className="mr-2" alt="volver" src="/assets/promocion/volver.png" />
                Volver
            </Link>
        </div>
        <div className="promocion__main">
            <div className="promocion__promo">
                <img className="promocion__img" src={(`../../${promo.img}`)} alt={promo.desc} />
                <div className="d-flex justify-content-center align-items-start promocion__precios">
                    <p className="promocion__momento mr-2">Antes</p>
                    <p className="promocion__precio mr-2"><s>$300</s></p>
                    <p className="promocion__descuento">-{promo.descuento}%</p>
                    <p className="promocion__precio ml-2">${300*('0.' + (100 - promo.descuento))}</p>
                    <p className="promocion__momento ml-2">Ahora</p>
                </div>
                <div className="promocion__desbot">

                    <h3 className="promocion__descripcion">{promo.desc}</h3>

                    <div className="d-flex justify-content-between">
                        <button className="promocion__btnfavcomp">
                            <img className="mr-2" alt="favoritos" src="/assets/promocion/favoritos.png" />
                            Guardar
                        </button>
                    
                        <button className="promocion__btnfavcomp">
                            <img className="mr-2" alt="compartir" src="/assets/promocion/compartir.png" />
                            Compartir
                        </button>
                    </div>
                    <div>
                        <button className="promocion__btnescanea">Escanea el codigo</button>
                        <span className="promocion__span">(Debes estar en el local)</span>
                    </div>
                </div>

            </div>

            <hr/>

            <div>
                <h3 className="promocion__restaurante">
                    <img src={(`../../${resta.logo}`)} alt="logo" className="mr-2" />
                    {resta.restaurante}
                </h3>
                <button className="promocion__btn-seguir">Seguir marca</button>

                <h5 className="promocion__datosresta">
                    <img className="mr-2" src="/assets/promocion/ubicacion.png" alt="ubicacion" />
                    Galeano 2920, Villa Cabrera
                </h5>
                <a 
                    className="promociones__ubicacion"
                    href="https://www.google.com/maps?q=Galeano+2920,+Villa+Cabrera&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiaj6DdhL_uAhVQIrkGHQTEDjoQ_AUoAXoECAQQAw" 
                >
                    Como llegar
                </a>
                <h5 className="promocion__datosresta">
                    <img className="mr-2" src="/assets/promocion/horario.png" alt="ubicacion" />
                    Horarios: lun a dom 9 - 21 hs
                </h5>
                <span className="promocion__span justify-content-start mb-2">(Abierto ahora)</span>

                <h4 className="promocion__mas-info">Mas informacion del cupon</h4>

                <h5 className="promocion__datosresta">
                    <img className="mr-2" src="/assets/promocion/experiencias.png" alt="ubicacion" />
                    Experiencias
                </h5>

                <div className="d-flex mb-3">
                    <div className="d-flex justify-content-center align-items-center flex-column mr-3">
                        <h2 className="promocion__rating-resta">4.0</h2>
                        <div>
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                            <span className="far fa-star"></span>
                        </div>
                        <span className="promocion__span justify-content-start mt-2">(2 votos)</span>
                    </div>
                    <div>
                        <div className="d-flex align-items-center">
                            <p className="m-0 mr-2">5</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <p className="m-0 mr-2">4</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <p className="m-0 mr-2">3</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <p className="m-0 mr-2">2</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <p className="m-0 mr-2">1</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="promocion__datospromo">Valido hasta 21/10/2021</p>
                <p className="promocion__datospromo">{(`Descuento del ${ promo.descuento } en ${ promo.desc} en el restaurante ${ promo.restaurante }. Descuento exclusivo de Cupot, promocion no acumulable.`)}</p>

            </div>

        </div>
    </>
    )
}
