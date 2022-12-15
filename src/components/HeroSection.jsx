import React from "react";
import { Link } from "react-router-dom";
import { useModal } from "../hooks/useModal";
import ContactFormContainer from "./ContactFormContainer";
//import imgHero from "./assets/hero-img.jpg";

const HeroSection = () => {
  const { triggerModal, closeModal } = useModal();

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__col">
            <h1>
              El lugar para que tus niños aprendan y se diviertan al mismo
              tiempo
            </h1>
            <div>
              <button
                onClick={() =>
                  triggerModal(
                    <ContactFormContainer
                      closeForm={closeModal}
                    ></ContactFormContainer>
                  )
                }
              >
                Inscripción 2023
              </button>
            </div>
            <Link name="nosotros" className="nav-scroll" href="/"></Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
