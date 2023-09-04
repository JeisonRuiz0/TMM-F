import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/stadistic.png";
import { FiArrowRight } from "react-icons/fi";
import './Styles/AboutRight.css'; 




const AboutRight = () => {
  return (
    <div className="aboutRight-container">
      <div className="aboutRight-banner-container">
        <div className="aboutRight-text-section">
          <h1 className="primary-heading">
              Tarjeton
          </h1>
          <p className="primary-text">
            Ganar será posible a partir de un liderazgo comprometido con el manejo eficiente de los recursos públicos, 
            cero tolerancia a la corrupción, el fortalecimiento de las instituciones públicas orientadas al servicio al ciudadano, la incorporación y aprovechamiento de las TIC, la participación ciudadana y el control social.
          </p>
         
          <button className="secondary-button">
            Como votar
          </button>
          

        </div>
        <div className="aboutRight-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutRight;
