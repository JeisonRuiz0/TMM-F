import React from "react";
import { Timeline, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineItem } from "@mui/lab";
import "./Styles/WorkHistory.css";

const WorkHistory = () => {
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
                <p className="primary-text">Concejal de Tunja periodo 2004 - 2007</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <p className="primary-text">Diputado a la asamblea 2008-2011</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <p className="primary-text">Diputado a la asamblea 2011- 2013</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <p className="primary-text">Diputado a la asamblea 2016- 2019</p>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
      <div className="workHistory-container__image">
            <img src="https://cfmotocolombia.com/wp-content/uploads/2023/04/0000_MY2023_450SR_Nebula-Black_Right.jpg" alt="" />
        </div>
    </div>
  )
}

export default WorkHistory;