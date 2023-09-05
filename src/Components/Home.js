import React from "react";
import BannerHome from "../Assets/BannerHome1.png";
import Logo from "../Assets/LogoV.png";
import { FiArrowRight } from "react-icons/fi";
import './Styles/Home.css';
import YouTube from 'react-youtube';

const Home = () => {
  const videoId = "ZLzS7JrjCqk"; 

  const opts = {
    height: '480',
    width: '800',
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
          <div className="home-image-section_video"  style={{ borderRadius: '20px' }}>
            <YouTube videoId={videoId} opts={opts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
