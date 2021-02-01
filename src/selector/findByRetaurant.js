import { listaRestaurantes } from "../restaurantes/restaurantes"


export const findByRetaurant = ( restaurant ) => {

    return listaRestaurantes.filter( resta => resta.id === parseInt(restaurant))
}