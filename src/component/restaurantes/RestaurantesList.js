import React from "react";
import { listaRestaurantes } from "../../restaurantes/restaurantes";
import { RestaurantesCard } from "./RestaurantesCard";

export const RestaurantesList = () => {
  const restaurantes = listaRestaurantes;

  return (
    <div className="container">
      <h3 className="categorias__titulo">Restaurantes</h3>

      {restaurantes.map((valor) => (
        <div key={valor.restaurante}>
          <h4 className="restaurantelist__titulo mt-4" key={valor.id}>
            <img className="mr-2" src={valor.logo} alt={valor.restaurante} /> {valor.restaurante}{" "}
          </h4>

          <div className="d-flex overflow-hidden">
            {valor.promociones.map((v) => (
              <RestaurantesCard key={v.id} promociones={v} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
