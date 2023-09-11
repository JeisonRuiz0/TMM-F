import React from "react";
import './Styles/StrategicAxesComponent.css';

import StrategicAxis from "./StrategicAxis";
import calidadImage from '.././Assets/Ejes/calidad.png';
import equidadImage from '.././Assets/Ejes/equidad.png';
import ordenamientoImage from '.././Assets/Ejes/ordenamiento.png';
import productividadImage from '.././Assets/Ejes/productividad.png';

const StrategicAxisComponent = () =>{
    return(
        <div className="StrategicAxisComponent-container">
            <div className="StrategicAxisComponent-container-text">
                <h1 className="primary-heading">Ejes Estrategicos</h1>
                <p className="primary-text">Desde la gestión y el diálogo, con la suma de esfuerzos institucionales, sociales, públicos, privados e incluso supranacionales, lograremos cumplir
                    con todos estos propósitos de gobierno que son los anhelos de las personas que habitan la ciudad de Tunja que levantan su voz y al unísono gritan:
                    Tunja Merece MÁS!!!</p>
            </div>
            <div className="StrategicAxisComponent-container-items">
                <StrategicAxis image={equidadImage} items={["EQUIDAD", "INCLUSION", "GOBERNANZA"]} />
                <StrategicAxis image={ordenamientoImage} items={["INFRAESTRUCTURA", "ESPACIO PÚBLICO"]} />
                <StrategicAxis image={productividadImage} items={["PRODUCTIVIDAD", "AMBIENTE SOSTENIBLE", ]} />
                <StrategicAxis image={calidadImage} items={[ "VIVIENDA DIGNA", "EDUCACIÓN", "SALUD" , "SEGURIDAD", "DEPORTE, RECREACION Y ACTIVIDAD FISICA", "ARTE Y CULTURA", "PROSPERIDAD SOCIAL"]} />

            </div>

            <div className="StrategicAxisComponent-container-button">
            <   button className="secondary-button">Saber más</button>
            </div>
        </div>
    )
}


export default StrategicAxisComponent;