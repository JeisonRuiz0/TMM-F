import React from "react";
import BannerHome from "../Assets/BannerHome1.png";
import Logo from "../Assets/LogoV.png";
import { FiArrowRight } from "react-icons/fi";
import './Styles/Home.css';
import YouTube from 'react-youtube';

const Home = () => {
  const videoId = "ZLzS7JrjCqk"; 

  const opts = {
    height: '330px',
    width: '100%',
    playerVars: {
      autoplay: 1, 
    },
  };

  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerHome} alt="" />
        </div>
        <div className="home-text-section">
          <img src={Logo} alt="" />
          <p className="primary-text">
            Quieres conocer al <b>ÚNICO</b> candidato independiente para la alcaldía de Tunja?
          </p>
          <button className="secondary-button">
            Saber más <FiArrowRight />
          </button>
        </div>
        <div className="home-image-section">
            <YouTube videoId={videoId} opts={opts} />
        </div>
      </div>
    </div>
  );
};

export default Home;
