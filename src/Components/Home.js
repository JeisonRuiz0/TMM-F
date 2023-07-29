import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import './Styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Con Cesar Lopez Tunja Gana
          </h1>
          <p className="primary-text">
            Ganar será posible a partir de un liderazgo comprometido con el manejo eficiente de los recursos públicos, 
            cero tolerancia a la corrupción, el fortalecimiento de las instituciones públicas orientadas al servicio al ciudadano, la incorporación y aprovechamiento de las TIC, la participación ciudadana y el control social.
          </p>
          <button className="secondary-button">
            Saber mas <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
