import React from "react";
import { Routes, Route, BrowserRouter, NavLink, Navigate } from "react-router-dom";
import Inicio from "../Inicio";
import Portafolio from "../Portafolio";
import Servicios from "../Servicios";
import Curriculum from "../Curriculum";
import Contacto from "../Contacto";
import HeaderNav from "../layout/HeaderNav";
import Footer from "../layout/Footer";
const MisRutas = () => {
  return (
    <div>
      <BrowserRouter>
        <HeaderNav />
        <section className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/inicio"></Navigate>} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/portafolio" element={<Portafolio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route
              path="*"
              element={
                <div className="page">
                  <h1 className="heading">Error 404</h1>
                </div>
              }
            />
          </Routes>
        </section>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default MisRutas;
