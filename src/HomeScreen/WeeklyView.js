import React, { useEffect, useState } from "react";
import "./WeeklyView.scss";
import DayCard from "./Components/DayCard";
import { dummy_data } from "../Assets/Data/dummy_data";
import { getNextMonday } from "../Assets/Functions/utils";

const WeeklyView = () => {
  const [mondayDate, setMondayDate] = useState(getNextMonday());
  const [weeklyData, setWeeklyData] = useState();

  useEffect(() => {
    setWeeklyData(sortWeeklyData(dummy_data, mondayDate));
  });

  return (
    <div className="weekly-view">
      <DayCard dayOfWeek="Monday" data={dummy_data} />
      <DayCard dayOfWeek="Tuesday" />
      <DayCard dayOfWeek="Wednesday" />
      <DayCard dayOfWeek="Thursday" />
      <DayCard dayOfWeek="Friday" />
      <DayCard dayOfWeek="Saturday" />
      <DayCard dayOfWeek="Sunday" />
    </div>
  );
};

const sortWeeklyData = (data, startingMonday) => {
  console.log("DATA", data);
  console.log("startingMonday", startingMonday);
  let filteredData = {
    monday: data.filter((session) => session.date.getTime() == startingMonday.getTime()),
  };
  console.log("🚀 ~ file: WeeklyView.js ~ line 34 ~ sortWeeklyData ~ filteredData", filteredData);
};

export default WeeklyView;
