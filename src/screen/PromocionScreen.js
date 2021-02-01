import React from 'react'
import { useParams } from 'react-router-dom'
import { Navbar } from '../component/navbar/Navbar'
import { Promocion } from '../component/promocion/Promocion'
import { findByPromocionById } from '../selector/findByPromocionById'
import { findByRetaurant } from '../selector/findByRetaurant'

export const PromocionScreen = () => {

    const { restaurante, id } = useParams()

    const [resta] = findByRetaurant( restaurante )
    const [promo] = findByPromocionById( resta.promociones, id )
    
    
    return (
        <>
            <Navbar />

            <Promocion promo={promo} resta={resta} />
        </>
    )
}
