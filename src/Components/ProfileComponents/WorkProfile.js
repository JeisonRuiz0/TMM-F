import React from "react";
import './Styles/WorkProfile.css';
import WorkHistory from "./WorkHistory";

const workProfile = () => {

  return (
    <div className="workProfile-section-wrapper">
      <div className="workProfile-section-top">
        <h1 className="primary-heading">Trayectoria Laboral</h1>
        <p className="primary-text">
        He construido paso a paso una carrera con consolidando excelentes relaciones interpersonales en el sector público, en el sector privado y en instancias territoriales y nacionales, destacando mi experiencia en 
        </p>
      </div>
      <WorkHistory />
    </div>
  );
};

export default workProfile;
