import React from "react";

const ForgotYourPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = () => {};
  return (
    <div className="forgot_password">
      <h1>Recuperar contraseña</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="forgotPassword">Ingrese su email</label>
        <input type="email" name="forgotPassword" onChange={handleChange} />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default ForgotYourPassword;
