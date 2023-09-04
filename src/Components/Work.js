import React from "react";
import GovernancePrinciples from './HomeComponents/GovernancePrinciples';
import './Styles/Work.css';

const Work = () => {
  
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Este es nuestro programa de gobierno</h1>
        <p className="primary-text">
        Es reflejo de las diferentes expresiones de ciudadanas y ciudadanos del municipio de Tunja que buscan un cambio.
        </p>
      </div>
      <div className="work-section-items">
        <GovernancePrinciples />
      </div>
    </div>
  );
};

export default Work;
