import React from "react";
import "./WeeklyView.scss";
import DayCard from "./Components/DayCard";

const WeeklyView = () => {
  return (
    <div className="weekly-view">
      <DayCard dayOfWeek="Monday" />
      <DayCard dayOfWeek="Tuesday" />
      <DayCard dayOfWeek="Wednesday" />
      <DayCard dayOfWeek="Thursday" />
      <DayCard dayOfWeek="Friday" />
      <DayCard dayOfWeek="Saturday" />
      <DayCard dayOfWeek="Sunday" />
    </div>
  );
};

export default WeeklyView;
