import React from "react";
import ProfilePic from "../../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";
import './Styles/TestimonialProfile.css';

const testimonialProfile = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">Soy parte de esa generacion boyacense</h1>
        <p className="primary-text">
        Soy parte de esa generación boyacense, que cree en el compromiso de la palabra, el trabajo, el esfuerzo constante, la transparencia y la integridad, así como en el diálogo permanente y el disfrute efectivo de las libertades que han marcado la historia de Tunja, no sólo como una ciudad de gente emprendedora, sí no de trayectorias heroicas, que han sido insumo constante para la construcción nuestro país. 
        </p>
      </div>
      <div className="testimonialProfile-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        “Es por esto qué, con el espíritu fortalecido en los valores de la familia que poseemos todos los boyacenses, me presento a ustedes con la firme decisión de aportar a la unidad de nuestra ciudad, enfrentando la corrupción y mejorando el bienestar de todos los Tunjanos. “
        </p>

        <h2>Cesar Lopez</h2>
      </div>
    </div>
  );
};

export default testimonialProfile;
