import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import {FaTiktok} from "react-icons/fa";
import {BsWhatsapp} from "react-icons/bs";

import './Styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <a href="https://x.com/cesaralopezm?s=21&t=u1Qa05QkmIIV8eyS3XxeIg"><BsTwitter /></a>
          <a href="https://www.tiktok.com/@cesarlopezalcalde?_t=8fS1sgu46qr&_r=1"><FaTiktok /></a>
          <a href="https://instagram.com/cesarlopezalcalde_?igshid=MWZjMTM2ODFkZg=="><BsInstagram /></a>
          <a href="https://www.youtube.com/@cesarlopezlopezalcalde"><BsYoutube  /></a>
          <a href="https://www.facebook.com/CESARLOPEZMORALES?mibextid=LQQJ4d"><FaFacebookF /></a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Inicio</span>
          <span>Recursos</span>
          <span>Perfil del Candidato</span>
          <span>Tu Aporte</span>
        </div>
        <div className="footer-section-columns">
          <span><BsWhatsapp/> 310-797-87-16</span>
        </div>
        <div className="footer-section-columns">
          <span>Terminos & Condiciones</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
