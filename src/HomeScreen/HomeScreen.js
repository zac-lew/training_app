import React, { useState } from "react";
import "./HomeScreen.scss";
import HeaderBar from "./Components/HeaderBar";
import WeeklyView from "./WeeklyView";
import { dummyData } from "../Assets/Data/dummy_data";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const HomeScreen = () => {
  const history = useHistory();
  const [currentView, setCurrentView] = useState("Weekly");
  return (
    <div className="home-screen">
      <HeaderBar currentView={currentView} setCurrentView={setCurrentView} />
      {renderTrainingView(currentView)}
      {/* <Button variant="outline-success" className="add-plan-button" onClick={() => history.push("/create")}>
        Add Training Plan!
      </Button> */}
    </div>
  );
};

const renderTrainingView = (currentView) => {
  switch (currentView) {
    case "Daily":
      return "Not yet available";
    case "Weekly":
      return <WeeklyView />;
    case "Monthly":
      return "Not yet available";
    case "Yearly":
      return "Not yet available";
  }
};

export default HomeScreen;
