import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useMatch } from "react-router-dom";
import { useAuth } from "../context/fireBaseAuth/FirebaseAuth";

const NavBarLateral = () => {
  const [chatIcon, setChatIcon] = useState(false);
  const [adminIcon, setAdminIcon] = useState(false);

  const { logout } = useAuth();
  const matchCreateAdmin = useMatch("admin/crear-admin");

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    const activeIcon = () => {
      if (matchCreateAdmin) {
        setAdminIcon(true);
        setChatIcon(false);
      } else {
        setAdminIcon(false);
        setChatIcon(true);
      }
    };

    activeIcon();
  }, [adminIcon, chatIcon, matchCreateAdmin]);

  return (
    <>
      <header className="sidebar">
        <nav className="sidebar-nav">
          <div className="sidebar-col">
            <div className="sidebar-brand">
              <Link to="/">
                <img
                  src="../assets/logo.svg"
                  className="sidebar-brand-logo"
                  alt="logo"
                />
              </Link>
            </div>
            <ul>
              <li>
                <Link to="/admin">
                  <img
                    src={
                      chatIcon
                        ? "../assets/msg-logo-active.svg"
                        : "../assets/msg-logo-inactive.svg"
                    }
                    className="sidebar-link"
                    alt="mensajes icono"
                  />
                </Link>
              </li>
              <li>
                <Link to="/admin/crear-admin">
                  <img
                    src={
                      adminIcon
                        ? "../assets/add-admin-active.svg"
                        : "../assets/add-admin-inactive.svg"
                    }
                    className="sidebar-link"
                    alt="mensajes icono"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="logout-col">
            <button onClick={handleLogout}>
              <img
                src="../assets/logout-icon.svg"
                alt="cerrar sesion"
                className="logout-icon"
              />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBarLateral;
