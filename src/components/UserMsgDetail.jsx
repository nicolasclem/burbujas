import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserMsgDetail = ({ data }) => {
  const [active, setActive] = useState(false);

  const { name, content, date, hour } = data;

  console.log(data);

  const handleActive = () => {
    setActive(true);
  };

  return (
    <div className="container_admin">
      <div className="msg_detail">
        <div className="msg_detail-hero">
          <Link to="/admin">
            <img src="../assets/back-icon.svg" alt="volver" />
          </Link>
          <h2>{name}</h2>
        </div>
        <span className="msg_detail-subtitle">
          Mensaje enviado el dia {date} a las {hour}
        </span>
      </div>
      <div className="msg_detail-content">
        <h4>{content}</h4>
      </div>

      {active ? (
        <div className="msg_detail-response">
          <span>Escribe tu posible respuesta</span>
          <textarea rows="5" placeholder="Texto respuesta"></textarea>
          <button>Enviar mensaje</button>
        </div>
      ) : (
        <button className="msg_detail-button" onClick={handleActive}>
          Responder
        </button>
      )}
    </div>
  );
};

export default UserMsgDetail;
