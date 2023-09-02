import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import './Styles/About.css';

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
          ¡Como llegar a nuestra sede!
        </h1>
        <p className="primary-text">
        Este principio se centra en mejorar las condiciones de vida de los ciudadanos, buscando una vida digna basada en garantías y derechos fundamentales. Se enfoca en la "democracia de cercanía", acercándose a los habitantes para tomar decisiones que beneficien a todos. El objetivo es superar la pobreza, las desigualdades, el inconformismo social y la falta de garantías institucionales en relación con los problemas y necesidades de los ciudadanos de Tunja.    
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Saber mas</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Ver video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
