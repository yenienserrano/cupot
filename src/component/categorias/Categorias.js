import React from 'react'

export const Categorias = () => {
    return (
        <div className="container mt-3">
            <h3 className="categorias__titulo">Categorías</h3>
            <div className="d-flex">
                <div className="mr-4">
                    <img className="mb-2" src="./assets/home/gourmet.png" alt="categoria"/>
                    <p className="categorias__parrafo">Gourmet</p>
                </div>
                <div className="mr-4 ml-1">
                    <img className="mb-2" src="./assets/home/fastfood.png" alt="categoria"/>
                    <p className="categorias__parrafo">Fast food</p>
                </div>
                <div className="mr-4 ml-1">
                    <img className="mb-2" src="./assets/home/veggie.png" alt="categoria"/>
                    <p className="categorias__parrafo">Veggie</p>
                </div>
                <div className="mr-4 ml-2">
                    <img className="mb-2" src="./assets/home/sintacc.png" alt="categoria"/>
                    <p className="categorias__parrafo">Sin tacc</p>
                </div>
                <div className="ml-2">
                    <img className="mb-2" src="./assets/home/dulces.png" alt="categoria"/>
                    <p className="categorias__parrafo">Dulces</p>
                </div>
            </div>
        </div>
    )
}
