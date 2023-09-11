import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/stadistic.png";
import { FiArrowRight } from "react-icons/fi";
import './Styles/AboutRight.css';
import backgroundImage from '.././Assets/BannerTarjeton.png';




const AboutRight = () => {
  return (
    <div className="aboutRight-container">
      <div className="aboutRight-container__background" >
        <img src={backgroundImage} alt="" />
      </div>
      
      <div className="aboutRight-banner-container">
        <div className="aboutRight-text-section">
          <h1 className="primary-heading">
            TARJETÓN
          </h1>
          <p className="primary-text">
            Mejorar la calidad de vida de los Tunjanos dando garantía a los derechos fundamentales, enfocado en la DEMOCRACIA DE CERCANÍA, escuchando a la comunidad para la toma de decisiones inteligentes que interpreten las necesidades y expectativas más sentidas de los Tunjanos, el objetivo es superar la pobreza extrema, la desigualdad, el inconformismo y la falta de garantías institucionales para dar solución a la creciente problemática social que agobia a la ciudad. 
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
