import React, { useState } from "react";
import "./HomeScreen.scss";
import HeaderBar from "./Components/HeaderBar";
import WeeklyView from "./WeeklyView";
import { dummy_data } from "../Assets/Data/dummy_data";
import { useHistory } from "react-router-dom";
import { AddSessionModal } from "./Components/AddSession";

const HomeScreen = () => {
  const history = useHistory();
  const [currentView, setCurrentView] = useState("Weekly");
  const [trainingData, setTrainingData] = useState(dummy_data);
  const [showAddSessionModal, setShowAddSessionModal] = useState(false);
  return (
    <div className="home-screen">
      <HeaderBar
        currentView={currentView}
        setCurrentView={setCurrentView}
        setShowAddSessionModal={setShowAddSessionModal}
      />
      {renderTrainingView(currentView, trainingData)}
      <AddSessionModal
        showAddSessionModal={showAddSessionModal}
        setShowAddSessionModal={setShowAddSessionModal}
      />
    </div>
  );
};

const renderTrainingView = (currentView, trainingData) => {
  switch (currentView) {
    case "Daily":
      return "Not yet available";
    case "Weekly":
      return <WeeklyView trainingData={trainingData} />;
    case "Monthly":
      return "Not yet available";
    case "Yearly":
      return "Not yet available";
  }
};

export default HomeScreen;
