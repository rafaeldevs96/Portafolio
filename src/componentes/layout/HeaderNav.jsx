import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const HeaderNav = () => {
  const [themeBtn, setThemeBtn] = useState("light");

  const themeDark = () => {
    setThemeBtn((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (themeBtn === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [themeBtn]);
  return (
    <header className="header">
      <div className="logo">
        <span>R</span>
        <h3>Rafael Gallardo Web</h3>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to={"/inicio"} className={({ isActive }) => (isActive ? "active" : "")}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to={"/portafolio"} className={({ isActive }) => (isActive ? "active" : "")}>
              Portafolio
            </NavLink>
          </li>
          <li>
            <NavLink to={"/servicios"} className={({ isActive }) => (isActive ? "active" : "")}>
              Servicios
            </NavLink>
          </li>
          <li>
            <NavLink to={"/curriculum"} className={({ isActive }) => (isActive ? "active" : "")}>
              Curriculum
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contacto"} className={({ isActive }) => (isActive ? "active" : "")}>
              Contacto
            </NavLink>
          </li>
          <li>
            <button className="theme" onClick={themeDark}>
              ☀️
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNav;
