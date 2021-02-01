import React from 'react'
import { RestaurantesCard } from './RestaurantesCard'

export const Destacados = () => {

    const destacados = [
        {
            id: "r1p1",
            restaurante: 'Restaurante 1',
            img: './assets/restaurantes/promocion1.png',
            desc: '1 Copa helada',
            descuento: 50
        },
        {
            id: "r2p1",
            restaurante: 'Restaurante 2',
            img: './assets/restaurantes/promocion2.png',
            desc: 'Papas bravas con queso y perejil',
            descuento: 30
        },
        {
            id: "r4p2",
            restaurante: 'Restaurante 4',
            img: './assets/restaurantes/promocion3.png',
            desc: 'Lemon pie 2 porciones',
            descuento: 25
        },
        {
            id: "r3p1",
            restaurante: 'Restaurante 3',
            img: './assets/restaurantes/promocion4.png',
            desc: 'Pizza napolitana',
            descuento: 20
        },
    ]

    return (
        <div className="container">
            <h3 className="categorias__titulo">Destacados</h3>
            <div className="d-flex overflow-hidden">

                {
                    destacados.map( value => (
                        <RestaurantesCard 
                            key={ value.restaurante }
                            promociones={ value }
                        />
                    ))
                }
                
            </div>
        </div>
    )
}
