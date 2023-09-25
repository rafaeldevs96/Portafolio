import React from "react";

const Contacto = () => {
  return (
    <div className="page">
      <h1 className="heading">Contacto</h1>
      <form className="contact" action="mailto:rafael1996gc@gmail.com">
        <input type="text" placeholder="nombre" />
        <input type="text" placeholder="apellido" />
        <input type="text" placeholder="email" />
        <textarea placeholder="motivo de contacto"></textarea>
        <input type="submit" value="enviar" />
      </form>
    </div>
  );
};

export default Contacto;
