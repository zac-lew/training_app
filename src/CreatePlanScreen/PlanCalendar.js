import React from "react";
import "./PlanCalendar.scss";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

const PlanCalendar = (props) => (
  <Calendar
    localizer={localizer}
    events={[]}
    startAccessor="start"
    endAccessor="end"
    style={{ height: "100%" }}
    drilldownView="month"
  />
);

export default PlanCalendar;
