import React from 'react'
import { Link } from 'react-router-dom'

export const RestaurantesCard = ({promociones}) => {

    const r = [ "r1p1", "r1p2", "r1p3" ]
    const re =  [ "r2p1", "r2p2", "r2p3", "r2p4" ] 
    const res = [ "r3p1", "r3p2", "r3p3" ]
    const rest = [ "r4p1", "r4p2", "r4p3", "r4p4" ]
    
    
    const restaurante = () => {
        if( r.includes( promociones.id ) ){
            return 1
        }

        if( re.includes( promociones.id )){
            return 2
        }

        if( res.includes( promociones.id ) ){
            return 3
        }
        
        if( rest.includes( promociones.id ) ){
            return 4
        }
    }

    
    
    return (
        <div className="restaurantecard__card mb-2 mr-4">
            <div style={{
                height:'15px'
            }}>

            </div>
            <Link
                to={`/promocion/${ restaurante() }/${promociones.id}`}
            >
        
            <div 
                className="restaurantecard__datos"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(${ promociones.img })`
                }}
            >
                <div>
                    <div className="d-flex justify-content-between">
                        <p className="restaurantecard__restaurante">{promociones.restaurante}</p>
                        <p className="restaurantecard__descuento">-{promociones.descuento}%</p>
                    </div>
                    
                    <p className="restaurantecard__desc">{promociones.desc}</p>
                </div>
            </div>
            </Link>
            <div className="d-flex">
                <button className="w-50 restaurantecard__btn brl"><img src="./assets/home/info.png" alt="boton"/></button>
                <button className="w-50 restaurantecard__btn brr"><img src="./assets/home/3puntos.png" alt="boton"/></button>
            </div>
        </div>
    )
}
