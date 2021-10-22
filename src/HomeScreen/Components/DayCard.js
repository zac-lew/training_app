import React from "react";
import "./DayCard.scss";
import { ReactComponent as Running } from "../../Assets/Icons/running.svg";
import { ReactComponent as Cycling } from "../../Assets/Icons/cycling.svg";
import { ReactComponent as Swimming } from "../../Assets/Icons/swimming.svg";
import { ReactComponent as Strength } from "../../Assets/Icons/weightlifting.svg";
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
              <div>{showDistanceOrTime(activity) + " Run"}</div>
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
              <div>{showDistanceOrTime(activity) + " Ride"}</div>
              <Cycling />
              <div>Intensity: {capitalizeFirstLetter(activity.intensity)}</div>
            </div>
          );
        case "swimming":
          return (
            <div
              className="session"
              key={activity.date + activity.daily_session}
            >
              <div>Session {activity.daily_session}:</div>
              <div>{showDistanceOrTime(activity) + " Swim"}</div>
              <Swimming />
              <div>Intensity: {capitalizeFirstLetter(activity.intensity)}</div>
            </div>
          );
        case "strength":
          return (
            <div
              className="session"
              key={activity.date + activity.daily_session}
            >
              <div>Session {activity.daily_session}:</div>
              <div>{showDistanceOrTime(activity) + " Gym Session"}</div>
              <Strength />
              <div>Intensity: {capitalizeFirstLetter(activity.intensity)}</div>
            </div>
          );
      }
    });
};

const showDistanceOrTime = (activity) => {
  if (activity.distance) return activity.distance + activity.distance_unit;
  else if (activity.time) return activity.time + "min";
  else return "";
};

export default DayCard;
