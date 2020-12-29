import React from "react";
import "./DragAndDropMenu.scss";
import activities from "../../Assets/Constants/activities";
import MenuItem from "./MenuItem";
import { capitalizeFirstLetter } from "../../Assets/Functions/utils";

const renderActivites = () => {
  return activities.map((activity, i) => <MenuItem activity={capitalizeFirstLetter(activity)} />);
};

const DragAndDropMenu = (props) => <div className="drag-and-drop-container">{renderActivites()}</div>;

export default DragAndDropMenu;
