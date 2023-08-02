import React from "react";
import PickMeals from "../../Assets/pick-meals-image.png";
import ChooseMeals from "../../Assets/choose-image.png";
import DeliveryMeals from "../../Assets/delivery-image.png";
import SaludImage from "../../Assets/salud.png";
import './Styles/WorkProfile.css';

const workProfile = () => {
  const workProfileInfoData = [
    {
      image: PickMeals,
      title: "Gestion y control Politico",
      text: "Gestión y el pleno ejercicio del control político ante los gobiernos municipal y departamental en el análisis, la organización, la planeación y ejecución de políticas públicas. ",
    },
    {
      image: ChooseMeals,
      title: "Abogado",
      text: "He sido abogado litigante, docente universitario, Concejal de Tunja en el periodo 2004-2007",
    },
    {
      image: DeliveryMeals,
      title: "Diputado",
      text: "Diputado a la Asamblea de Boyacá en los periodos 2008-2011, 2012-2013, 2016-2019",
    }
  ];
  return (
    <div className="workProfile-section-wrapper">
      <div className="workProfile-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">Trayectoria Laboral</h1>
        <p className="primary-text">
        He construido paso a paso una carrera con consolidando excelentes relaciones interpersonales en el sector público, en el sector privado y en instancias territoriales y nacionales, destacando mi experiencia en 
        </p>
      </div>
      <div className="workProfile-section-bottom">
        {workProfileInfoData.map((data) => (
          <div className="workProfile-section-info" key={data.title}>
            <div className="info-boxes-img-container">
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default workProfile;
