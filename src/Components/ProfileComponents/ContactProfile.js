import React from "react";
import './Styles/ContactProfile.css';

const ContactProfile = () => {
  return (
    <div className="contactProfile-page-wrapper">
      <h1 className="primary-heading">Tienes alguna inquietud? </h1>
      <h1 className="primary-text">Enviame tu correo y te estare contando mas acerca del cambio</h1>
      <div className="contactProfile-form-container">
        <input type="text" placeholder="tucorreo@ejemplo.com" />
        <button className="secondary-button">Enviar</button>
      </div>
    </div>
  );
};

export default ContactProfile;
