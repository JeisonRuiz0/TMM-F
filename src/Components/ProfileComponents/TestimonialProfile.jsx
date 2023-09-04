import React from "react";
import ProfilePic from "../../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";
import './Styles/TestimonialProfile.css';

const testimonialProfile = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Tengo el aval de la ciudadania</h1>
        <p className="primary-text">
          Mi aspiración a la Alcaldía de Tunja ha sido avalada por el deseo y el compromiso de miles de ciudadanos que buscan una representación genuina y sin intermediarios. A esas 58.174 personas que confiaron en mí, les reitero mi compromiso de llegar hasta el final de las elecciones de manera independiente, siendo coherente con el respaldo adquirido con la gente y la confianza que en mí depositaron.
        </p>
        <img src="https://www.demotos.com.co/wp-content/uploads/2022/04/CFMoto-450SR-port.jpg" alt="" />

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
