import React from "react";
import "./HomeScreen.scss";
import HeaderBar from "./Components/HeaderBar";
import WeeklyView from "./WeeklyView";
import { dummyData } from "../Assets/Data/dummy_data";
import { Button } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <HeaderBar />
      {/* <WeeklyView /> */}
      <Button variant="outline-success" className="add-plan-button">
        Add Training Plan!
      </Button>
    </div>
  );
};

export default HomeScreen;
