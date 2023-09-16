import React, { useState } from 'react';
import './Styles/StrategicAxis.css';

function StrategicAxis({ image, items }) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="strategic-axis">
            <img
                src={image}
                alt="Strategic Axis"
                className={`strategic-axis-image ${isOpen ? 'open' : ''}`}
                onClick={toggleAccordion}
            />
            <ul className={ `strategic-axis-items primary-text  ${isOpen ? 'open' : ''}`}>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default StrategicAxis;