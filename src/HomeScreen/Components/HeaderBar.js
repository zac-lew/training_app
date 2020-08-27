import React from "react";
import "./HeaderBar.scss";

const HeaderBar = (props) => {
  return (
    <div className="header-bar">
      <div className="menu">Menu</div>
      <div className="welcome">Welcome Zac!</div>
      <div className="view">Current View: Weekly</div>
    </div>
  );
};

export default HeaderBar;
