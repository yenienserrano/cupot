import React from "react";

export const Slider = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./assets/home/paso1.png" className="d-block w-100" alt="paso 1" />
        </div>
        <div className="carousel-item">
          <img src="./assets/home/paso2.png" className="d-block w-100" alt="paso 2" />
        </div>
        <div className="carousel-item">
          <img src="./assets/home/paso3.png" className="d-block w-100" alt="paso 3" />
        </div>
        <div className="carousel-item">
          <img src="./assets/home/paso4.png" className="d-block w-100" alt="paso 4" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};
