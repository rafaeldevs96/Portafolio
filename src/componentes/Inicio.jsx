import React from "react";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div className="home">
      <h1>
        Hola, soy Rafael Gallardo soy <strong> Desarrolador web</strong> en venezuela, ofrezco
        servicios de
        <strong> programacion orientado al front-end. </strong>
      </h1>
      <h2>
        Te ayudo a crear tus sitios web y desarollarlos <Link to="/contacto">Contacto</Link>
      </h2>

      <section className="last-work">
        <h2 className="heading">Algunos de mis proyectos</h2>
        <p>Estos son algunos de mi trabajo de desarrolo web</p>
        <div className="works"></div>
      </section>
    </div>
  );
};

export default Inicio;
