import React from "react";
import { Timeline, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineItem } from "@mui/lab";
import "./Styles/Formation.css";

const Formation = () => {
  return (
    <div className="formation-container">
      <div className="formation-container__text">
        <h1 className="primary-tittle"> Formacion academica</h1>
        <p className="primary-text"> Me he formado como:</p>
      </div>

      <div className="formation-container__timeLine">
        <Timeline >
          <TimelineItem >
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent> <p className="primary-text">Abogado de la Universidad INNCA de Colombia</p> </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent><p className="primary-text">Especialista en Instituciones Jurídico Políticas y Derecho Público de la Universidad Nacional de Colombia</p></TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent><p className="primary-text">Especialista en Gobierno y Gerencia Territorial de la Universidad Santo Tomás</p></TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent><p className="primary-text">Especialista en Gestión Pública de la Escuela Superior de Administración Pública -ESAP-</p></TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent><p className="primary-text">Magister en Derecho de Estado, Gobierno y Desarrollo de Entidades territoriales de la Universidad Externado de Colombia.</p> </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>


    </div>
  )
}

export default Formation;