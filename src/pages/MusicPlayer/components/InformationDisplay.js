import React from "react";
import classes from "./styles/InformationDisplay.module.css";

const InformationDisplay = (props) => {
  return (
    <div className={classes.informationDisplay}>
      <img className={classes.thumbnail} src="https://upload.wikimedia.org/wikipedia/en/a/ae/AJR_The_Click.jpg" />
      <p className={classes.title}>Overture</p>
      <p className={classes.artist}>AJR</p>
    </div>
  );
};

export default InformationDisplay;
