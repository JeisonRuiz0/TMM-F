import React from "react";
import AboutBackground from "../../Assets/about-background.png";
import BannerProfile from "../../Assets/BannerProfile.png";
import AboutBackgroundImage from "../../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import './Styles/About.css';
import Logo from "../../Assets/LogoC.png";


const AboutProfile = () => {
  return (
    <div className="aboutProfile-section-container">
      <div className="aboutProfile-background-image-container">
        <img src={BannerProfile} alt="" />
      </div>
      <div className="aboutProfile-section-image-container">
         {/*<img src={AboutBackgroundImage} alt="" />*/}
      </div>
     
      <div className="aboutProfile-section-text-container profile">
        <h1 className="primary-heading">
          <img  src={Logo}/>
        </h1>
        <p className="primary-text">
            Soy Cesar Augusto Lopez Morales, un hijo de Boyaca, nacido en la ciudad de Chiquinquira, forjado con esfuerzo, trabajo duro y compromiso.
        </p>
        <div className="aboutProfile-buttons-container">
          <button className="secondary-button">Saber mas</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Ver video
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutProfile;
