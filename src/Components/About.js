import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import './Styles/About.css';

const About = () => {
  return (
    <div className="about-section-container">
      
      
      <div className="about-section-text-container">
        <h1 className="primary-heading">
          ¡Como llegar a nuestra sede!
        </h1>
        <p className="primary-text">
          MI COMPROMISO CON TUNJA es ejercer un liderazgo real y autentico – sin intermediarios ni compromisos de continuismo- en el manejo eficiente, transparente y honesto de los recursos públicos, cero tolerancia a la corrupción, fortalecimiento de las instituciones públicas orientadas al servicio del usuario, incorporación y aprovechamiento de las TICS y participación ciudadana en la ejecución presupuestal. 
          La sede de las ideas está de puertas abiertas para todos los Tunjanos, ubicada en la Carrera 8 # 19-72 diagonal a la Pila del Mono.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Saber mas</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Ver video
          </button>
        </div>
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
    </div>
  );
};

export default About;
