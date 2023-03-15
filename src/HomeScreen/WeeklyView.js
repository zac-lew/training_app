import React, { useEffect, useState } from "react";
import "./WeeklyView.scss";
import DayCard from "./Components/DayCard";
import moment from "moment";
import { Button } from "react-bootstrap";

const WeeklyView = ({ trainingData }) => {
  // Use temp data to prevent need for updating:
  // const [mondayDate, setMondayDate] = useState(
  //   moment().startOf("week").add(1, "days")
  // );
  const [mondayDate, setMondayDate] = useState(moment("2021-10-18"));
  const [weeklyData, setWeeklyData] = useState({
    monday: null,
    tuesday: null,
    wednesday: null,
    thursday: null,
    friday: null,
    saturday: null,
    sunday: null,
  });

  useEffect(() => {
    setWeeklyData(sortWeeklyData(trainingData, mondayDate));
  }, []);

  useEffect(() => {
    setWeeklyData(sortWeeklyData(trainingData, mondayDate));
  }, [mondayDate]);

  return (
    <div className="weekly-view">
      <DayCard dayOfWeek="Monday" data={weeklyData.monday} />
      <DayCard dayOfWeek="Tuesday" data={weeklyData.tuesday} />
      <DayCard dayOfWeek="Wednesday" data={weeklyData.wednesday} />
      <DayCard dayOfWeek="Thursday" data={weeklyData.thursday} />
      <DayCard dayOfWeek="Friday" data={weeklyData.friday} />
      <DayCard dayOfWeek="Saturday" data={weeklyData.saturday} />
      <DayCard dayOfWeek="Sunday" data={weeklyData.sunday} />
    </div>
  );
};

const sortWeeklyData = (data, startingMonday) => {
  return {
    monday: data.filter((session) => session.date.isSame(startingMonday)),
    tuesday: data.filter((session) =>
      session.date.isSame(startingMonday.clone().add(1, "days"))
    ),
    wednesday: data.filter((session) =>
      session.date.isSame(startingMonday.clone().add(2, "days"))
    ),
    thursday: data.filter((session) =>
      session.date.isSame(startingMonday.clone().add(3, "days"))
    ),
    friday: data.filter((session) =>
      session.date.isSame(startingMonday.clone().add(4, "days"))
    ),
    saturday: data.filter((session) =>
      session.date.isSame(startingMonday.clone().add(5, "days"))
    ),
    sunday: data.filter((session) =>
      session.date.isSame(startingMonday.clone().add(6, "days"))
    ),
  };
};

export default WeeklyView;
