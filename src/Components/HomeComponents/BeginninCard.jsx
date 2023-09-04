import React from "react";
import './Styles/BeginningCard.css';


const BeginninCard = ({iconUrl, text}) => {
    return(
        <div className="BeginninCardContainer">
            <div className="BeginninCardContainer-icon">
                <img src= {iconUrl} alt="" />
            </div>
            <div className="BeginninCardContainer-text">
                <p className="primary-text">{text}</p>
            </div>
        </div>
    )
}


export default BeginninCard; 