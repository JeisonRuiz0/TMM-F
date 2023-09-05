import React from "react";
import BannerHome from "../Assets/BannerHome1.png";
import Logo from "../Assets/LogoV.png";
import { FiArrowRight } from "react-icons/fi";
import './Styles/Home.css';
import YouTube from 'react-youtube';

const Home = () => {

  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerHome} alt="" />
        </div>
        <div className="home-text-section">
           <img src={Logo} alt="" />
          
          <p className="primary-text">
            Quieres conocer al <b> UNICO </b> candidato independiente para la alcaldia de Tunja? 
          </p>
          <button className="secondary-button">
            Saber mas <FiArrowRight />{" "}
          </button>
          
        </div>
        <div className="home-image-section">
          <div className="home-image-section_video">
            <YouTube videoId="oJM7v0Jpn3E&ab" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
