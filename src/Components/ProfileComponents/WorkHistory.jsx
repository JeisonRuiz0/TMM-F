import React, { useState } from "react";
import { Timeline, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineItem } from "@mui/lab";
import "./Styles/WorkHistory.css";
import diputado from '../../Assets/diputado.jpg';
import otraImagen from '../../Assets/people.png'; // Reemplaza 'otraImagen.jpg' con la ruta de tu otra imagen

const WorkHistory = () => {
  // Paso 1: Agregar estado para la imagen actual
  const [currentImage, setCurrentImage] = useState(diputado);

  // Paso 2: Controlador de clic para cambiar la imagen
  const handleTimelineItemClick = (newImage) => {
    setCurrentImage(newImage);
  };

  return (
    <div className="workHistory-container">
      <div className="workHistory-container__timeLine">
        <div className="flex flex-col items-start">
          <Timeline className="timeline-workHistory">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                {/* Paso 2: Asociar el controlador de clic a la etiqueta <p> */}
                <p className="primary-text" onClick={() => handleTimelineItemClick(diputado)}>Concejal de Tunja periodo 2004 - 2007</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <p className="primary-text" onClick={() => handleTimelineItemClick(otraImagen)}>Diputado a la asamblea 2008-2011</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <p className="primary-text" onClick={() => handleTimelineItemClick(otraImagen)}>Diputado a la asamblea 2011-2013</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>
                <p className="primary-text" onClick={() => handleTimelineItemClick(otraImagen)}>Diputado a la asamblea 2016-2019</p>
              </TimelineContent>
            </TimelineItem>
            {/* Agrega más elementos de la línea de tiempo con sus respectivos controladores de clic */}
          </Timeline>
        </div>
      </div>
      <div className="workHistory-container__image">
        {/* Paso 3: Utilizar el estado actualizado para mostrar la imagen */}
        <img src={currentImage} alt="" />
      </div>
    </div>
  );
};

export default WorkHistory;