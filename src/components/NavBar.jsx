import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/fireBaseAuth/FirebaseAuth";
import LoginForm from "./LoginForm";
import { useModal } from "../hooks/useModal";
import ContactFormContainer from "./ContactFormContainer";

const NavBar = () => {
  const [active, setActive] = useState("navbar-nav");
  const [toggleIcon, setToggleIcon] = useState("nav-toggler");

  const { userData, logout } = useAuth();
  const { triggerModal, closeModal } = useModal();

  const navToggle = () => {
    active === "navbar-nav"
      ? setActive("navbar-nav nav-active")
      : setActive("navbar-nav");

    // Toggler

    toggleIcon === "nav-toggler"
      ? setToggleIcon("nav-toggler toggle")
      : setToggleIcon("nav-toggler");
  };

  const gotop = () => {
    window.scrollTo(0, 0);
  };

  const handleLogout = () => {
    logout();
  };

  // Modificaciones en navBar//

  const optionNav= [
    {
      display: 'Inicio',
      path:'/'
    },
    {
      display: 'Nosotros',
      path:'/#nosotros'
    },
    {
      display: 'Espacios',
      path:'/#espacios'
    },
    {
      display: 'Precios',
      path:'/#precios'
    },
    {
      display: 'Reseñas',
      path:'/#reseñas'
    }
  
  ]

  return (
    <header className="nav-header">
      <div className="container">
        <nav className="navbar">
          <div className="nav-brand">
            <Link to="/" onClick={gotop}>
              <img
                src="./assets/logo.svg"
                className="nav-brand-logo"
                alt="logo"
              />
            </Link>
            <span className="nav-brand-title">burbujas de algodón</span>
          </div>
          <div className={active}>
            <div className="nav_sesion">
              {userData && userData.role === "admin" ? (
                <Link className="nav_sesion-link" to="/admin">
                  Administrar
                </Link>
              ) : (
                <Link
                  className="nav_sesion-link"
                  onClick={() =>
                    triggerModal(<LoginForm closeForm={() => closeModal()} />)
                  }
                >
                  Iniciar sesion
                </Link>
              )}

              {userData ? (
                <button
                  className="nav_sesion-btn nav_sesion-link"
                  onClick={handleLogout}
                >
                  Salir
                </button>
              ) : null}
            </div>
            <ul>              
              {/* map  de opciones!!!  */}
              {
                optionNav.map((e,i)=>(
                (e.display === "Inicio")?
                  <li className="nav-item">
                  <Link className="nav-link" to={e.path} onClick={gotop}>
                  {e.display}
                  </Link>
                  </li>
                  :<li key={i} className="nav-item">
                    <a className="nav-link" href={e.path}>
                      {e.display}
                    </a>
                  </li>
                  ))
              }            
              <li className="nav-item">
                <Link
                  className="nav-link"
                  onClick={() =>
                    triggerModal(
                      <ContactFormContainer closeForm={() => closeModal()} />
                    )
                  }
                >
                  Contacto
                </Link>
              </li>
            </ul>
            <div className={toggleIcon} onClick={navToggle}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
