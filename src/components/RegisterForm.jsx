import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/fireBaseAuth/FirebaseAuth";
import { useModal } from "../hooks/useModal";
import LoginForm from "./LoginForm";

const RegisterForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();
  const { triggerModal, closeModal } = useModal();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    signup(user.email, user.password);
  };

  const handleGoToLogin = () => {
    closeModal();
    triggerModal(<LoginForm closeForm={() => closeModal()} />);
  };

  return (
    <div className="login">
      <h1>Registrarse</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="login-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email@ejemplo.com"
          required
          onChange={handleChange}
          className="login-input"
        />
        <label htmlFor="password" className="login-label">
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          placeholder="******"
          onChange={handleChange}
          maxLength={20}
          className="login-input"
        />
        <div className="login-forgot">
          <input type="submit" value="Registrarse" className="login-btn" />
        </div>
        <div className="login-registerSection">
          <span>¿Posees una cuenta?</span>
          <Link className="login-link" onClick={handleGoToLogin}>
            Ingresar
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
