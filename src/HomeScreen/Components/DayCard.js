import React from "react";
import "./DayCard.scss";
import { ReactComponent as Running } from "../../Assets/Icons/running.svg";
import { ReactComponent as Cycling } from "../../Assets/Icons/cycling.svg";

const DayCard = (props) => {
  return (
    <div className="day-card">
      <div className="header">{props.dayOfWeek}</div>
      <div className="content">
        <div className="session">
          <div>Session 1:</div>
          <div>10km Run</div>
          <Running />
          <div>Intensity: Easy</div>
        </div>
        <div className="session">
          <div>Session 2:</div>
          <div>1hr 30min Ride</div>
          <Cycling />
          <div>Intensity: Easy</div>
        </div>
      </div>
    </div>
  );
};

export default DayCard;
