import React from 'react'

export const Restaurantes = () => {
    return (
        <div className="container restaurante__main">
            <h3 className="categorias__titulo">Categorías</h3>
            <div className="d-flex">
                <div className="mr-3">
                    <img className="mb-2" src="./assets/home/resta1.png" alt="restaurante"/>
                    <p className="categorias__parrafo">Restaurante 1</p>
                </div>
                <div className="mr-3">
                    <img className="mb-2" src="./assets/home/resta2.png" alt="restaurante"/>
                    <p className="categorias__parrafo">Restaurante 2</p>
                </div>
                <div className="mr-3">
                    <img className="mb-2" src="./assets/home/resta3.png" alt="restaurante"/>
                    <p className="categorias__parrafo">Restaurante 3</p>
                </div>
                <div className="mr-3">
                    <img className="mb-2" src="./assets/home/resta4.png" alt="restaurante"/>
                    <p className="categorias__parrafo">Restaurante 4</p>
                </div>
                <div className="mr-3">
                    <img className="mb-2" src="./assets/home/resta5.png" alt="restaurante"/>
                    <p className="categorias__parrafo">Restaurante 5</p>
                </div>
                <div className="mr-3">
                    <h1 className="restaurantes_plus">+</h1>
                    <button className="restaurantes__btn">Ver todos</button>
                </div>
            </div>
        </div>
    )
}
