import React from "react";
import SpacesCarousel from "../components/SpacesCarousel";
import { Link } from "react-router-dom";

const Spaces = () => {
  return (
    <div className="container">
      <div className="spaces">
        <h2>Espacios</h2>
        <span>En nuestros establecimientos contamos con:</span>
        <ul>
          <li>Patios verdes</li>
          <li>Salon de juegos</li>
          <li>Salon de musica</li>
          <li>Aulas convertibles en mini-salas de juego</li>
        </ul>
        <div className="spaces__img">
          <SpacesCarousel />
        </div>
        <Link name="precios" className="nav-scroll" href="/"></Link>
      </div>
    </div>
  );
};

export default Spaces;
