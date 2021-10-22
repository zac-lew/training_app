import React from "react";
import "./DayCard.scss";
import { ReactComponent as Running } from "../../Assets/Icons/running.svg";
import { ReactComponent as Cycling } from "../../Assets/Icons/cycling.svg";
import { capitalizeFirstLetter } from "../../Assets/Functions/utils";

const DayCard = ({ dayOfWeek, data }) => {
  return (
    <div className="day-card">
      <div className="header">{dayOfWeek}</div>
      <div className="content">{renderActivities(data)}</div>
    </div>
  );
};

const renderActivities = (data) => {
  if (data)
    return data.map((activity) => {
      switch (activity.sport) {
        case "running":
          return (
            <div
              className="session"
              key={activity.date + activity.daily_session}
            >
              <div>Session {activity.daily_session}:</div>
              <div>{activity.distance + activity.distance_unit + " Run"}</div>
              <Running />
              <div>Intensity: {capitalizeFirstLetter(activity.intensity)}</div>
            </div>
          );
        case "cycling":
          return (
            <div
              className="session"
              key={activity.date + activity.daily_session}
            >
              <div>Session {activity.daily_session}:</div>
              <div>{activity.distance + activity.distance_unit + " Ride"}</div>
              <Cycling />
              <div>Intensity: {capitalizeFirstLetter(activity.intensity)}</div>
            </div>
          );
      }
    });
};

export default DayCard;
