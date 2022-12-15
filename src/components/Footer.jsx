import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer__section">
        <div className="container">
          <div className="footer">
            <div className="footer__us">
              <h4>Sobre nosotros</h4>
              <a href="/#nosotros" className="footer__us--link">
                Nuestra historia
              </a>
              <a href="/#nosotros" className="footer__us--link">
                ¿Dónde estamos?
              </a>
              <a href="/#reseñas" className="footer__us--link">
                Reseñas
              </a>
            </div>
            <div className="footer__contact">
              <h4>Contacto</h4>
              <div className="footer-icons">
                <img src="./assets/mail-icon.svg" alt="Mail icon" />
                <span>info@burbujasdealgodon.com.ar</span>
              </div>
              <div className="footer-icons">
                <img src="./assets/wsp-icon.svg" alt="WhatsApp icon" />
                <span>+53 548651691</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
