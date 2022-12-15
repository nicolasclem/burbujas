import React from "react";
import UserMsg from "./UserMsg";
import { data } from "../db/userMsgTest";

const UserAdminContainer = () => {
  return (
    <>
      <div className="container_admin">
        <div className="user">
          <div className="user-hero">
            <h1>Seccion de mensajes</h1>
            <h3>
              Bienvenido a la seccion de mensajes del administrador, desde aqui
              podras ver todos los mensajes que te dejaron los papis sobre
              consultas acerca del jardin.
            </h3>
          </div>
          <div className="user-btn-section">
            <button className="user-btn btn-pendientes">Pendientes</button>
            <button className="user-btn btn-resueltos">Resueltos</button>
          </div>
          <div className="user-msgs">
            {data.map((el, index) => (
              <UserMsg key={index} data={el} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAdminContainer;
