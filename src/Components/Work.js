import React from "react";
import GovernancePrinciples from './HomeComponents/GovernancePrinciples';
import './Styles/Work.css';

const Work = () => {
  
  return (
    <div className="programa-container">
      <div className="programa-container-top">
        <h1 className="primary-heading">Este es nuestro Programa de Gobierno…</h1>
        <p className="primary-text">
        Este programa de gobierno ha sido estructurado por un equipo interdisciplinario de las más altas calidades académicas con base en las legítimas aspiraciones, sueños y necesidades de más de 58 mil Tunjanas si Tunjanos, que cansados por la falta de movilidad, la creciente inseguridad, la indelicadeza en el manejo de los recursos públicos y la falta de gobernabilidad, entre tantas problemáticas visibles, han considerado una firmeza y sin presiones ni dádivas, respaldar con su voto al único candidato que puede gobernar a la Ciudad con independencia,  sin compromisos de continuidad y sin patrones ni maquinarias políticas.
        </p>
      </div>
      <div className="programa-section-items">
        <GovernancePrinciples />
      </div>
    </div>
  );
};

export default Work;
