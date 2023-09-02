import React from "react";
import BeginninCard from "./BeginninCard";
import item1 from '../../Assets/nums/1.png';
import item2 from '../../Assets/nums/1.png';
import item3 from '../../Assets/nums/1.png';
import item4 from '../../Assets/nums/1.png';
import item5 from '../../Assets/nums/1.png';
import item6 from '../../Assets/nums/1.png';
import item7 from '../../Assets/nums/1.png';
import item8 from '../../Assets/nums/1.png';
import item9 from '../../Assets/nums/1.png';


const GovernancePrinciples = () => {
    return(
        <div className="GovernancePrinciplesContainer">
            <div className="GovernancePrinciples-text">
                <h1 className="primary-tittle">Principios de gobierno</h1>
            </div>
            <div className="GovernancePrinciples-items">
                <BeginninCard iconUrl={item1} text={"Dialogo de Cercania"} />
                <BeginninCard iconUrl={item2} text={"Gobierno Garantista e Incluyente"} />
                <BeginninCard iconUrl={item3} text={"Posicionamiento de la ciudad"} />
                <BeginninCard iconUrl={item4} text={"Transparencia, Redencion de Cuentas, Gobierno abierto y TIC"} />
                <BeginninCard iconUrl={item5} text={"Cero Tolerancia a la Corrupcion"} />
                <BeginninCard iconUrl={item6} text={"Planeación"} />
                <BeginninCard iconUrl={item7} text={"Austeridad y eficiencia en el manejo de los recursos publicos"} />
                <BeginninCard iconUrl={item8} text={"Desarrollo Integral y Sostenible"} />
                <BeginninCard iconUrl={item9} text={"Prosperidad Social"} />
            </div>
            <div className="GovernancePrinciples-button">
                <button className="secondary-button">Saber más</button>
            </div>
        </div>
    )
}


export default GovernancePrinciples;