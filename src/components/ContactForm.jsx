import React from "react";
import Loader from "./Loader";

const ContactForm = ({
  handleBlur,
  handleChange,
  form,
  errors,
  handleSubmit,
  loading,
  closeForm,
}) => {
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__grid form__grid--name">
          <label htmlFor="name" className="form-label">
            Nombre y Apellido
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Escriba su nombre y apellido"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.name}
            maxLength={20}
            className="form-input"
          />
          {errors.name && <p className="msg-error">{errors.name}</p>}
        </div>
        <div className="form__grid form__grid--email">
          <label htmlFor="email" className="form-label">
            Correo electronico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Escriba su correo electronico"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.email}
            className="form-input"
          />
          {errors.email && <p className="msg-error">{errors.email}</p>}
        </div>
        <div className="form__grid form__grid--phone">
          <label htmlFor="phone" className="form-label">
            Numero de telefono
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            required
            placeholder="Escriba su numero"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.phone}
            maxLength={15}
            className="form-input"
          />
          {errors.phone && <p className="msg-error">{errors.phone}</p>}
        </div>
        <div className="form__grid form__grid--check">
          <label htmlFor="llamada" className="checkbox__label">
            <input
              type="checkbox"
              id="llamada"
              name="llamada"
              value="true"
              className="checkbox__label--input"
            />
            ¿Podemos llamarlo?
          </label>
        </div>
        <div className="form__grid form__grid--child">
          <label htmlFor="child" className="form-label">
            ¿Tiene un niño o una niña?
          </label>
          <input
            type="text"
            id="child"
            name="child"
            required
            placeholder="Escriba si tiene un niño o una niña"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.child}
            maxLength={20}
            className="form-input"
          />
          {errors.child && <p className="msg-error">{errors.child}</p>}
        </div>
        <div className="form__grid form__grid--message">
          <label htmlFor="message" className="form-label">
            ¿Que consulta tiene?
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="Escriba su duda, explayese todo lo que sea necesario para que podamos entederlo y responderle en la brevedad"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.message}
            required
            maxLength={500}
            className="form-textarea"
          ></textarea>
          {errors.message && <p className="msg-error">{errors.message}</p>}
        </div>
        {loading ? (
          <Loader />
        ) : (
          <input
            type="submit"
            value="Pedir este plan"
            className="btn-contact"
          />
        )}
      </form>
    </div>
  );
};

export default ContactForm;
