import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/fireBaseAuth/FirebaseAuth";
import Alert from "../helpers/AlertService";
import { useModal } from "../hooks/useModal";
import ForgotYourPassword from "./ForgotYourPassword";
import Loader from "./Loader";
import RegisterForm from "./RegisterForm";

const LoginForm = ({ closeForm }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const { triggerModal, closeModal } = useModal();

  const { login } = useAuth();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const onLogin = () => {
      Alert.success({ title: "Bienvenido!!!" });
      closeForm();
    };
    login(user.email, user.password, onLogin);
  };

  const handleForgotPassword = () => {
    closeModal();
    triggerModal(<ForgotYourPassword closeForm={() => closeModal()} />);
  };

  const handleRegister = () => {
    closeModal();
    triggerModal(<RegisterForm closeForm={() => closeModal()} />);
  };

  return loading ? (
    <Loader></Loader>
  ) : (
    <div className="login">
      <h1>Iniciar sesión</h1>
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
          <input type="submit" value="Ingresar" className="login-btn" />
          <Link className="login-link" onClick={handleForgotPassword}>
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
        <div className="login-registerSection">
          <span>¿No posees una cuenta?</span>
          <Link className="login-link" onClick={handleRegister}>
            Registrarse
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
