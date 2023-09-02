import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import SaludImage from "../Assets/salud.png";
import './Styles/Work.css';

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Cultura",
      text: "La cultura es calidad de vida, permite soñar y conocer el mundo a través del arte y permite conocernos a nosotros mismos y nuestras tradiciones. ",
    },
    {
      image: ChooseMeals,
      title: "Seguridad",
      text: "Se consolida como un elemento  fundamental no solo en garantía del orden público sino en materia de  otorgar  bienestar, convivencia y construcción de armonía ",
    },
    {
      image: DeliveryMeals,
      title: "Deporte",
      text: "Se requiere de un potenciamiento de los hábitos de vida saludable y el potenciamiento del deporte",
    },
    {
      image: SaludImage,
      title: "Salud",
      text: "Permitit el fortalecimiento de  integralidad  y bienestar social  como parte de la gestión del gobierno municipal",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Este es nuestro programa de gobierno</h1>
        <p className="primary-text">
        Es reflejo de las diferentes expresiones de ciudadanas y ciudadanos del municipio de Tunja que buscan un cambio.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
