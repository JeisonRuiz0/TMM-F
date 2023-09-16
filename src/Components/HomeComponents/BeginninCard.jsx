import React from "react";
import './Styles/BeginningCard.css';


const BeginninCard = ({iconUrl, text, dataUrl}) => {
    return(
        <div className="BeginninCardContainer">
            <div className="BeginninCardContainer-icon">
                <a href={dataUrl}>
                    <img src= {iconUrl} alt="" />
                </a>
            </div>
            <div className="BeginninCardContainer-text">
                <p className="primary-text">{text}</p>
            </div>
        </div>
    )
}


export default BeginninCard; 