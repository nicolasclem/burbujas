import React, { useState } from "react";

const initialState = {
  name: "",
  email: "",
  password1: "",
  password2: "",
};

const CreateAdminComponent = () => {
  const [user, setUser] = useState(initialState);

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container_admin">
      <div className="create_admin">
        <div className="create_admin-hero">
          <h2>Crear nuevo usuario administrador</h2>
          <span>
            Crea nuevos administradores de manera sencilla, solo necesitas un
            correo y una contraseña.
          </span>
        </div>
        <div className="create_admin-form">
          <form onSubmit={handleSubmit}>
            <section className="create_admin-form--section">
              <label className="create_admin-label" htmlFor="name">
                Nombre y Apellido
              </label>
              <input
                type="text"
                className="create_admin-input"
                onChange={handleChange}
                name="name"
                placeholder="Escriba su nombre y apellido"
              />
            </section>
            <section className="create_admin-form--section">
              <label className="create_admin-label" htmlFor="email">
                Correo electronico
              </label>
              <input
                type="email"
                className="create_admin-input"
                onChange={handleChange}
                name="email"
                placeholder="Escriba su correo electrónico"
              />
            </section>
            <section className="create_admin-form--section">
              <label className="create_admin-label" htmlFor="password1">
                Contraseña
              </label>
              <input
                type="password"
                className="create_admin-input"
                onChange={handleChange}
                name="password1"
                placeholder="Escriba su contraseña"
              />
            </section>
            <section className="create_admin-form--section">
              <label className="create_admin-label" htmlFor="password2">
                Confirme contraseña
              </label>
              <input
                type="password"
                className="create_admin-input"
                onChange={handleChange}
                name="password2"
                placeholder="Escriba su contraseña"
              />
            </section>
            <input
              type="submit"
              value="Crear nuevo usuario administrador"
              className="create_admin-btn"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAdminComponent;
