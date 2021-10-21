import React from "react";
import "./HomeScreen.scss";
import HeaderBar from "./Components/HeaderBar";
import WeeklyView from "./WeeklyView";
import { dummyData } from "../Assets/Data/dummy_data";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const HomeScreen = () => {
  const history = useHistory();
  return (
    <div className="home-screen">
      <HeaderBar />
      <WeeklyView />
      {/* <Button variant="outline-success" className="add-plan-button" onClick={() => history.push("/create")}>
        Add Training Plan!
      </Button> */}
    </div>
  );
};

export default HomeScreen;
