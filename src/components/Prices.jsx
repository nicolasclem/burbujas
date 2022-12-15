import React from "react";
import { Link } from "react-router-dom";
import { useModal } from "../hooks/useModal";
import InscriptionFormContainer from "./InscriptionFormContainer";

const Prices = () => {
  const { triggerModal, closeModal } = useModal();

  const openInscriptionform = (plan) => {
    triggerModal(
      <InscriptionFormContainer plan={plan} closeForm={closeModal} />
    );
  };
  return (
    <div className="container">
      <div className="prices__section">
        <h2>Precios</h2>
        <span>En nuestro establecimiento contamos con:</span>
        <div className="row__prices">
          <div className="prices prices--simple">
            <div className="prices--simple-title">
              <div></div>
              <h4>Jornada simple</h4>
              <img src="./assets/star-simple.svg" alt="media estrella" />
            </div>
            <ul>
              <li>Turno simple (4hs)</li>
              <li>Se puede elegir turno mañana o tarde</li>
              <li>No hay vianda</li>
            </ul>
            <div className="btn-plan-flex">
              <button onClick={() => openInscriptionform("simple")}>
                Pedir este plan
              </button>
            </div>
          </div>
          <div className="prices prices--full ">
            <div className="prices--full-title">
              <div></div>
              <h4>Jornada Completa</h4>
              <img src="./assets/star-full.svg" alt="media estrella" />
            </div>
            <ul>
              <li>Turno completo (8hs - 17hs)</li>
              <li>Tu nene se puede quedar todo el dia</li>
              <li>Vianda incluida</li>
            </ul>
            <Link name="reseñas" className="nav-scroll" href="/"></Link>
            <div className="btn-plan-flex">
              <button onClick={() => openInscriptionform("full")}>
                Pedir este plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
