import React from "react";
import "./CreatePlanScreen.scss";
import DragAndDropMenu from "./DragAndDropMenu/DragAndDropMenu";
import PlanCalendar from "./PlanCalendar";

const CreatePlanScreen = (props) => {
  return (
    <div className="create-plan-screen">
      <div className="calendar-container">
        <PlanCalendar />
      </div>
      <div className="menu-container">
        <DragAndDropMenu />
      </div>
    </div>
  );
};

export default CreatePlanScreen;
