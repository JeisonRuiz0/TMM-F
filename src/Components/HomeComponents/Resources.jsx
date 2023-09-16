import React from "react";
import BeginninCard from "./BeginninCard";
import pdf from '../../Assets/pdfIcon.png';
import './Styles/Resources.css'; 
import folleto from '../../Resources/FolletoCampaña.pdf';
import periodico from '../../Resources/PERIODICODESPIERTATUNJA1.pdf';
import programa from '../../Resources/PROGRAMAGOBIERNOCERSARLOPEZ.pdf';

const Resourses = () => {
    return(
        <div className="resources-container">
            <div className="resources-container-title">
                <h1 className="primary-heading ">Recursos</h1>
            </div>
            <div className="resources-container-data">
                <BeginninCard iconUrl={pdf} text={"Periodico despierta Tunja 1ra Edición"} dataUrl={periodico} />
                <BeginninCard iconUrl={pdf} text={"Folleto Campaña"} dataUrl={folleto} />
                <BeginninCard iconUrl={pdf} text={"Programa de Gobierno"} dataUrl={programa}/>
            </div>
        </div>
    )
}



export default Resourses;