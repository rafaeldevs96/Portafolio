import React from "react";
import { trabajos } from "./data/Trabajos";
const Portafolio = () => {
  return (
    <div className="page">
      <h1 className="heading"> Portafolio</h1>

      {trabajos.map((trabajos) => {
        return (
          <article key={trabajos.id}>
            <span> {trabajos.categorias}</span>
            <h2>{trabajos.nombre}</h2>
            <h3>{trabajos.tecnologias}</h3>
          </article>
        );
      })}
    </div>
  );
};

export default Portafolio;
