import React from "react";
import classes from "./styles/ProgressBar.module.css";

const ProgressBar = (props) => {
  return (
    <div className={classes.progressBar}>
      <div className={classes.bar}></div>
      <div className={classes.progressHolder}>
        <div className={classes.progress}>
          <div className={classes.circle}></div>
        </div>
      </div>
      <div className={classes.timeHolder}>
        <p className={classes.currentTime}>0:45</p>
        <p className={classes.endingTime}>1:53</p>
      </div>
    </div>
  );
};

export default ProgressBar;
