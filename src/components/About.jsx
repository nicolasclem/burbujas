import React from "react";
import { Link } from "react-router-dom";
import Map from "./Map";

const About = () => {
  return (
    <div className="container">
      <section className="about">
        <h2>¿Quienes somos?</h2>
        <span>
          <span className="about-entry">Burbujas de algodon</span> tiene mas de
          5000 niños egresados, desde 1956 nos dedicamos a impartir una
          educacion de calidad con los profesionales altamente capacitados en la
          educacion de niños de preescolar.
        </span>
        <span>
          Somos fieles creyentes que una buena educacion es mucho mas que mandar
          tareas y escribir oraciones dictadas, mediante juegos logramos que los
          niños se diviertan y al mismo adquieran los conocimientos necesarios
          para su optimo desarrollo como adolescente.
        </span>
        <span>
          Estamos ubicados en Villa Crespo a 5 cuadras de Parque Centeranio
        </span>
        <Map />
        <Link name="espacios" className="nav-scroll" href="/"></Link>
      </section>
    </div>
  );
};

export default About;
