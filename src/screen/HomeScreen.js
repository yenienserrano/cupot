import React from 'react'
import { Footer } from '../component/footer/Footer'
import { Navbar } from '../component/navbar/Navbar'
import { Categorias } from '../component/categorias/Categorias'
import { Destacados } from '../component/restaurantes/Destacados'
import { Restaurantes } from '../component/restaurantes/Restaurantes'
import { RestaurantesList } from '../component/restaurantes/RestaurantesList'
import { Slider } from '../component/slider/Slider'

export const HomeScreen = () => {
    return (
        <div className="pb-4">

            <Navbar />

            <Slider />

            <Categorias />

            <Restaurantes />

            <Destacados />

            <RestaurantesList />

            <div className="d-flex justify-content-center mt-3">
                <button className="home__btn mb-5">Ver todos</button>
            </div>

            <Footer />
        </div>
    )
}
